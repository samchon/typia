import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is } from "./_test_is";

export const test_is_dynamic_composite = _test_is(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.id = false as any),
        (input) => (input.name = {} as any),
        (input) => (input["0"] = false as any),
        (input) => (input["prefix_wrong"] = 1 as any),
        (input) => (input["wrong_postfix"] = 2 as any),
        (input) => (input["value_1"] = null!),
        (input) => (input["between_one_and_2"] = "true" as any),
    ],
);
