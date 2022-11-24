import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_intersection = _test_assert_type(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createAssertType<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
