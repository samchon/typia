import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is } from "./_test_is";

export const test_is_object_intersection = _test_is(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.is(input),
    ObjectIntersection.SPOILERS,
);
