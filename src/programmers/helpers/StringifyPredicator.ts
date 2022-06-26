import { Metadata } from "../../metadata/Metadata";

export namespace StringifyPredicator {
    export function require_escape(value: string): boolean {
        return value
            .split("")
            .some((ch) => ESCAPED.some((escaped) => escaped === ch));
    }

    export function undefindable(meta: Metadata): boolean {
        return (
            meta.required === false ||
            (meta.resolved !== null && meta.resolved.required === false)
        );
    }

    const ESCAPED = ['"', "\\", "\b", "\f", "\n", "\n", "\r", "\t"];
}
