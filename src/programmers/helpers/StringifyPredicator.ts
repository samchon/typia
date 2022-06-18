export namespace StringifyPredicator {
    export function require_escape(value: string): boolean {
        return value
            .split("")
            .some((ch) => ESCAPED.some((escaped) => escaped === ch));
    }

    const ESCAPED = ['"', "\\", "\b", "\f", "\n", "\n", "\r", "\t"];
}
