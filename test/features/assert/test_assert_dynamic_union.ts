import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_union = _test_assert(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.assertType<DynamicUnion>(input),
    [
        (input) => {
            input["0"] = false as any;
            return `$input["0"]`;
        },
        (input) => {
            input["prefix_wrong"] = 1 as any;
            return `$input.prefix_wrong`;
        },
        (input) => {
            input["wrong_postfix"] = 2 as any;
            return `$input.wrong_postfix`;
        },
        (input) => {
            input["value_between_1_and_2"] = "two" as any;
            return `$input.value_between_1_and_2`;
        },
    ],
);
