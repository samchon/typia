import { Metadata } from "../../schemas/metadata/Metadata";

export namespace StringifyPredicator {
    export const require_escape = (value: string): boolean =>
        value.split("").some((ch) => ESCAPED.some((escaped) => escaped === ch));

    export const undefindable = (meta: Metadata): boolean =>
        meta.isRequired() === false ||
        (meta.escaped !== null && meta.escaped.returns.isRequired() === false);

    const ESCAPED = ['"', "\\", "\b", "\f", "\n", "\n", "\r", "\t"];
}
