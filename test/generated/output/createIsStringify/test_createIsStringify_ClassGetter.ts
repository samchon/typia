import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ClassGetter = _test_isStringify("ClassGetter", ClassGetter.generate, (input: Person): string | null => { const is = (input: any): input is Person => {
    return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name && "boolean" === typeof input.dead);
}; const stringify = (input: Person): string => {
    const $string = (typia.createIsStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${input.dead}}`;
}; return is(input) ? stringify(input) : null; }, ClassGetter.SPOILERS);
