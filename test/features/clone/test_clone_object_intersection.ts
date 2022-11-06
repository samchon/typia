import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_clone } from "./_test_clone";

export const test_clone_object_intersection = _test_clone(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.clone(input),
);
