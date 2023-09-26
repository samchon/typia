export const headers_to_string = (
    input: Record<string, any>,
): Record<string, string | string[] | undefined> => {
    const encoded: Record<string, string | string[] | undefined> = {};
    for (const [key, value] of Object.entries(input)) {
        const lower: string = key.toLowerCase();
        if (value === undefined) continue;
        else if (Array.isArray(value)) {
            if (value.length === 0) continue;
            else if (lower === "set-cookie")
                encoded[lower] = value.map((cookie) => String(cookie));
            else encoded[lower] = value.join(lower === "cookie" ? "; " : ", ");
        } else encoded[lower] = String(value);
    }
    return encoded;
};
