import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_template = _test_assert(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input["prefix_wrong"] = false as any;
            return `$input.prefix_wrong`;
        },
        (input) => {
            input["wrong_postfix"] = 1 as any;
            return `$input.wrong_postfix`;
        },
        (input) => {
            input["value_2"] = "two" as any;
            return `$input.value_2`;
        },
        (input) => {
            input["between_1_and_2"] = "false" as any;
            return `$input.between_1_and_2`;
        },
    ],
);
