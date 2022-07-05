import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_assert } from "./_test_assert";

export const test_assert_object_literal_property = _test_assert(
    "literal propertized object",
    ObjectLiteralProperty.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input["something-interesting-do-you-want?"] = {} as any;
            return `$input["something-interesting-do-you-want?"]`;
        },
        (input) => {
            input["or-something-crazy-do-you-want?"] = null!;
            return `$input["or-something-crazy-do-you-want?"]`;
        },
    ],
);
