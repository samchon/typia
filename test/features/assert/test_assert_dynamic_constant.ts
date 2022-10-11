import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_constant = _test_assert(
    "dynamic constant",
    DynamicConstant.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input["a"] = "zero" as any;
            return "$input.a";
        },
        (input) => {
            input["b"] = null!;
            return "$input.b";
        },
    ],
);
