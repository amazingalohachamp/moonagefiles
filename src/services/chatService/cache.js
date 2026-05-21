export function createCache() {
    const cache = new Map();

    return {
        get: (key) => cache.get(key) ?? null,
        set: (key, value) => cache.set(key, value),
        clear: () => cache.clear(),
        size: () => cache.size,
    };
}