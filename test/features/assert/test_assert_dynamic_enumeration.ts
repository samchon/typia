import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_enumeration = _test_assert(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input["fr"] = null!;
            return "$input.fr";
        },
        (input) => {
            input["ar"] = 0 as any;
            return "$input.ar";
        },
    ],
);
