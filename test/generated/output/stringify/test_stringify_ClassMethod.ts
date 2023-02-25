import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ClassMethod = _test_stringify("ClassMethod", ClassMethod.generate, (input) => ((input: Animal): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    return `{"name":${$string(input.name)},"age":${$number(input.age)}}`;
})(input));
