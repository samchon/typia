import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createIsPrune_ObjectLiteralProperty = _test_isPrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: any): input is ObjectLiteralProperty => {
        const is = (input: any): input is ObjectLiteralProperty => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" ===
                    typeof input["something-interesting-do-you-want?"] &&
                "string" === typeof input["or-something-crazy-do-you-want?"]
            );
        };
        const prune = (input: ObjectLiteralProperty): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "something-interesting-do-you-want?" === key ||
                        "or-something-crazy-do-you-want?" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ObjectLiteralProperty.SPOILERS,
);
