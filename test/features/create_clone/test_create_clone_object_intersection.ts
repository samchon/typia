import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_intersection = _test_clone(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createClone<ObjectIntersection>(),
);
