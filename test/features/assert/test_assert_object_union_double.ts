import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert } from "./_test_assert";

export const test_assert_object_union_double = _test_assert(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].value = "string" as any;
            return "$input[0]";
        },
        (input) => {
            input[1].child.value.y = "string" as any;
            return "$input[1]";
        },
        (input) => {
            input[2].child.value.y = 0 as any;
            return "$input[2]";
        },
        (input) => {
            input[3].child.value.y = false as any;
            return "$input[3]";
        },
    ],
);
