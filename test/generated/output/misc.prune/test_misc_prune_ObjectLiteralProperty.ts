import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_misc_prune_ObjectLiteralProperty =
    _test_misc_prune<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
        ((input: ObjectLiteralProperty): void => {
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
        })(input),
    );
