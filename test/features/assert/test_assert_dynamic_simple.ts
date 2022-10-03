import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_simple = _test_assert(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input["something"] = "one" as any;
            return `$input.something`;
        },
        (input) => {
            input["wrong"] = null!;
            return `$input.wrong`;
        },
    ],
);
