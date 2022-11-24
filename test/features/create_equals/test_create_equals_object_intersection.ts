import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_intersection = _test_equals(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createEquals<ObjectIntersection>(),
);
