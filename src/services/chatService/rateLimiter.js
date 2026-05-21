export function createRateLimiter(maxRequests = 10, windowMs = 60000) {
    const requests = new Map();

    return {
        isAllowed(id = "user") {
            const now = Date.now();
            const record = requests.get(id) ?? { count: 0, start: now };

            if (now - record.start > windowMs) {
                requests.set(id, { count: 1, start: now });
                return true;
            }

            if (record.count >= maxRequests) return false;

            record.count++;
            requests.set(id, record);
            return true;
        },
    };
}