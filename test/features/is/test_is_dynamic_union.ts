import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_is } from "./_test_is";

export const test_is_dynamic_union = _test_is(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.is<DynamicUnion>(input),
    [
        (input) => (input["0"] = false as any),
        (input) => (input["prefix_wrong"] = 1 as any),
        (input) => (input["wrong_postfix"] = 2 as any),
        (input) => (input["value_between_1_and_2"] = "two" as any),
    ],
);
