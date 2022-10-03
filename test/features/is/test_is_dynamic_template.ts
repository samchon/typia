import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_is } from "./_test_is";

export const test_is_dynamic_template = _test_is(
    "dynamic template",
    DynamicTemplate.generate,
    (input) => TSON.is(input),
    [
        (input) => (input["prefix_wrong"] = false as any),
        (input) => (input["wrong_postfix"] = 1 as any),
        (input) => (input["value_2"] = "two" as any),
        (input) => (input["between_1_and_2"] = "false" as any),
    ],
);
