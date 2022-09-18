import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_intersection = _test_assert_equals(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.assertEquals(input),
);
