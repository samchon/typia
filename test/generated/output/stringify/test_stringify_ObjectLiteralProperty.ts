import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectLiteralProperty = _test_stringify("ObjectLiteralProperty", ObjectLiteralProperty.generate, (input) => ((input: ISomething): string => {
    const $string = (typia.stringify as any).string;
    return `{"something-interesting-do-you-want?":${$string(input["something-interesting-do-you-want?"])},"or-something-crazy-do-you-want?":${$string(input["or-something-crazy-do-you-want?"])}}`;
})(input));
