export const query_to_string = (
    input: Record<string, any>,
): URLSearchParams => {
    const encoded: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(input)) {
        if (value === undefined) continue;
        else if (Array.isArray(value))
            for (const elem of value) encoded.append(key, String(elem));
        else encoded.set(key, String(value));
    }
    return encoded;
};
