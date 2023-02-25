import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ObjectGenericAlias = _test_isStringify("ObjectGenericAlias", ObjectGenericAlias.generate, (input: Alias): string | null => { const is = (input: any): input is Alias => {
    return "object" === typeof input && null !== input && "string" === typeof input.value;
}; const stringify = (input: Alias): string => {
    const $string = (typia.createIsStringify as any).string;
    return `{"value":${$string(input.value)}}`;
}; return is(input) ? stringify(input) : null; }, ObjectGenericAlias.SPOILERS);
