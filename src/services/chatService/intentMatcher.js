import intentsData from "./intents.json"; // your existing intents file

const intentCache = new Map();

export function matchIntent(userInput) {
    const key = userInput.toLowerCase();

    if (intentCache.has(key)) return intentCache.get(key);

    const input = key;
    let bestMatch = null;
    let bestScore = 0;

    for (const intent of intentsData.intents) {
        for (const pattern of intent.patterns ?? []) {
            const regex = new RegExp(pattern, "i");
            if (regex.test(input)) {
                // simple scoring: longer pattern = more specific = higher score
                const score = pattern.length / input.length;
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = intent;
                }
            }
        }
    }

    const reply = bestMatch
        ? bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)]
        : null;

    const confidence = bestMatch ? Math.min(0.7 + bestScore * 0.3, 1.0) : 0.0;
    const result = [reply, confidence];

    intentCache.set(key, result);
    return result;
}

export function clearIntentCache() {
    intentCache.clear();
}

export function getIntentStats() {
    return {
        intentsLoaded: intentsData.intents.length,
        totalPatterns: intentsData.intents.reduce(
            (sum, i) => sum + (i.patterns?.length ?? 0), 0
        ),
        intentCacheSize: intentCache.size,
    };
}