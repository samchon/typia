import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectLiteralProperty = _test_stringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: ObjectLiteralProperty.ISomething): string => {
        const $string = (typia.createStringify as any).string;
        return `{"something-interesting-do-you-want?":${$string(
            input["something-interesting-do-you-want?"],
        )},"or-something-crazy-do-you-want?":${$string(
            input["or-something-crazy-do-you-want?"],
        )}}`;
    },
);
