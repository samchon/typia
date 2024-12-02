import { Metadata } from "../../schemas/metadata/Metadata";

export namespace StringifyPredicator {
  export const require_escape = (value: string): boolean =>
    value.split("").some((ch) => ESCAPED.some((escaped) => escaped === ch));

  export const undefindable = (metadata: Metadata): boolean =>
    metadata.isRequired() === false ||
    (metadata.escaped !== null &&
      metadata.escaped.returns.isRequired() === false);

  const ESCAPED = ['"', "\\", "\b", "\f", "\n", "\n", "\r", "\t"];
}
