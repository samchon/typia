import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_isStringify_ObjectLiteralProperty =
    _test_json_isStringify<ObjectLiteralProperty>(ObjectLiteralProperty)(
        (input: ObjectLiteralProperty): string | null => {
            const is = (input: any): input is ObjectLiteralProperty => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" ===
                        typeof (input as any)[
                            "something-interesting-do-you-want?"
                        ] &&
                    "string" ===
                        typeof (input as any)["or-something-crazy-do-you-want?"]
                );
            };
            const stringify = (input: ObjectLiteralProperty): string => {
                const $string = (typia.json.createIsStringify as any).string;
                return `{"something-interesting-do-you-want?":${$string(
                    (input as any)["something-interesting-do-you-want?"],
                )},"or-something-crazy-do-you-want?":${$string(
                    (input as any)["or-something-crazy-do-you-want?"],
                )}}`;
            };
            return is(input) ? stringify(input) : null;
        },
    );
