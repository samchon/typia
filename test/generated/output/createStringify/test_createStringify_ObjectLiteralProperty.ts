import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createStringify_ObjectLiteralProperty = _test_stringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: ObjectLiteralProperty): string => {
        const $string: any = (typia.createStringify as any).string;
        return `{"something-interesting-do-you-want?":${$string(
            input["something-interesting-do-you-want?"],
        )},"or-something-crazy-do-you-want?":${$string(
            input["or-something-crazy-do-you-want?"],
        )}}`;
    },
);
