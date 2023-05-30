import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_createIsStringify_ObjectOptional = _test_isStringify("ObjectOptional", ObjectOptional.generate, (input: ObjectOptional): string | null => { const is = (input: any): input is ObjectOptional => {
    const $io0 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.email || "string" === typeof input.email) && (undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence));
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const stringify = (input: ObjectOptional): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $tail = (typia.createIsStringify as any).tail;
    const $so0 = (input: any): any => `{${$tail(`${undefined === input.id ? "" : `"id":${undefined !== input.id ? $string(input.id) : undefined},`}${undefined === input.name ? "" : `"name":${undefined !== input.name ? $string(input.name) : undefined},`}${undefined === input.email ? "" : `"email":${undefined !== input.email ? $string(input.email) : undefined},`}${undefined === input.sequence ? "" : `"sequence":${undefined !== input.sequence ? $number(input.sequence) : undefined}`}`)}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, ObjectOptional.SPOILERS);
