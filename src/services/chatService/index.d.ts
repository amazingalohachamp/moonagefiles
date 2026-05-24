export declare function chat(userInput: string): { reply: string; confidence: number; cached?: boolean };
export declare function clearAllCaches(): void;
export declare function getHealth(): { status: string; responseCacheSize: number; timestamp: string };
