import { createCache } from "./cache";
import { createRateLimiter } from "./rateLimiter";
import { validateInput } from "./validator";
import { matchIntent, clearIntentCache, getIntentStats } from "./intentMatcher";

const responseCache = createCache();
const rateLimiter = createRateLimiter();

const FALLBACK =
    "I'm sorry, I don't have information about that yet. " +
    "I can help with questions about Moonage Files like:\n" +
    "• Costing\n• Duration\n• Types of Design\n\n" +
    "What would you like to know about Moonage Files?";

export function chat(userInput) {
    if (!rateLimiter.isAllowed()) {
        return { reply: "Too many requests! Please wait a moment.", confidence: 0.0 };
    }

    const [isValid, errorMsg] = validateInput(userInput);
    if (!isValid) {
        return { reply: errorMsg, confidence: 0.0 };
    }

    const cacheKey = userInput.trim().toLowerCase();
    const cached = responseCache.get(cacheKey);
    if (cached) {
        return { reply: cached, confidence: 1.0, cached: true };
    }

    const [intentReply, confidence] = matchIntent(userInput);
    if (intentReply && confidence >= 0.7) {
        responseCache.set(cacheKey, intentReply);
        return { reply: intentReply, confidence, cached: false };
    }

    return { reply: FALLBACK, confidence: 0.0, cached: false };
}

export function clearAllCaches() {
    responseCache.clear();
    clearIntentCache();
}

export function getHealth() {
    return {
        status: "healthy",
        responseCacheSize: responseCache.size(),
        timestamp: new Date().toISOString(),
        ...getIntentStats(),
    };
}