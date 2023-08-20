import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_stringify_ObjectLiteralProperty = _test_stringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: ObjectLiteralProperty): string => {
            const $string = (typia.stringify as any).string;
            return `{"something-interesting-do-you-want?":${$string(
                (input as any)["something-interesting-do-you-want?"],
            )},"or-something-crazy-do-you-want?":${$string(
                (input as any)["or-something-crazy-do-you-want?"],
            )}}`;
        })(input),
);
