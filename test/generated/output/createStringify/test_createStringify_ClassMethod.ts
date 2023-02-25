import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ClassMethod = _test_stringify("ClassMethod", ClassMethod.generate, (input: Animal): string => {
    const $string = (typia.createStringify as any).string;
    return `{"name":${$string(input.name)},"age":${input.age}}`;
});
