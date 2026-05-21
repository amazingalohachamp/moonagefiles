export function validateInput(input) {
    if (!input || typeof input !== "string")
        return [false, "Message must be a non-empty string."];
    if (input.trim().length === 0)
        return [false, "Message cannot be blank."];
    if (input.length > 500)
        return [false, "Message is too long. Please keep it under 500 characters."];

    return [true, null];
}