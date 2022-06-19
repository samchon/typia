import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_intersection = _test_stringify(
    "intersected object",
    ObjectIntersection.generate(),
    (input) => TSON.stringify(input),
);
