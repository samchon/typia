import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is } from "./_test_is";

export const test_is_dynamic_simple = _test_is(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input["something"] = "one" as any),
        (input) => (input["wrong"] = null!),
    ],
);
