import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_intersection = _test_assert(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createAssertType<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
