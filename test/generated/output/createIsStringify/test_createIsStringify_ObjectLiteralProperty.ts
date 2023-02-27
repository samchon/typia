import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createIsStringify_ObjectLiteralProperty = _test_isStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: ObjectLiteralProperty): string | null => {
        const is = (input: any): input is ObjectLiteralProperty => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" ===
                    typeof input["something-interesting-do-you-want?"] &&
                "string" === typeof input["or-something-crazy-do-you-want?"]
            );
        };
        const stringify = (input: ObjectLiteralProperty): string => {
            const $string = (typia.createIsStringify as any).string;
            return `{"something-interesting-do-you-want?":${$string(
                input["something-interesting-do-you-want?"],
            )},"or-something-crazy-do-you-want?":${$string(
                input["or-something-crazy-do-you-want?"],
            )}}`;
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectLiteralProperty.SPOILERS,
);
