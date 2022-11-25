import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_intersection = _test_is_stringify(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.isStringify(input),
    ObjectIntersection.SPOILERS,
);
