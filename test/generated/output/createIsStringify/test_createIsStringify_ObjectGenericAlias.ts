import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_createIsStringify_ObjectGenericAlias = _test_isStringify("ObjectGenericAlias", ObjectGenericAlias.generate, (input: ObjectGenericAlias): string | null => { const is = (input: any): input is ObjectGenericAlias => {
    return "object" === typeof input && null !== input && "string" === typeof input.value;
}; const stringify = (input: ObjectGenericAlias): string => {
    const $string = (typia.createIsStringify as any).string;
    return `{"value":${$string(input.value)}}`;
}; return is(input) ? stringify(input) : null; }, ObjectGenericAlias.SPOILERS);
