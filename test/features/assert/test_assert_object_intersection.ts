import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert } from "./_test_assert";

export const test_assert_object_intersection = _test_assert(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.email = { value: "email" } as any;
            return "$input.email";
        },
        (input) => {
            input.name = [] as any;
            return "$input.name";
        },
        (input) => {
            input.vulnerable = 1 as any;
            return "$input.vulnerable";
        },
    ],
);
