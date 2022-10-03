import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_composite = _test_assert(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.id = false as any;
            return `$input.id`;
        },
        (input) => {
            input.name = {} as any;
            return `$input.name`;
        },
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
            input["value_1"] = null!;
            return `$input.value_1`;
        },
        (input) => {
            input["between_one_and_2"] = "true" as any;
            return `$input.between_one_and_2`;
        },
    ],
);
