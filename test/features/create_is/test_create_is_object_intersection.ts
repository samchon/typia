import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_intersection = _test_is(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createIs<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
