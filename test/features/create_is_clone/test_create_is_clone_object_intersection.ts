import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_intersection = _test_is_clone(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createIsClone<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
