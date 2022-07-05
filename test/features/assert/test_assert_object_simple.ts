import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert } from "./_test_assert";

export const test_assert_object_simple = _test_assert(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.scale.x = "number" as any;
            return "$input.scale.x";
        },
        (input) => {
            input.position = [] as any;
            return "$input.position";
        },
        (input) => {
            input.rotate = undefined!;
            return "$input.rotate";
        },
        (input) => {
            input.pivot = null!;
            return "$input.pivot";
        },
    ],
);
