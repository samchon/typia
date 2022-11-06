import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_intersection = _test_assert_clone(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.assertClone(input),
    ObjectIntersection.SPOILERS,
);
