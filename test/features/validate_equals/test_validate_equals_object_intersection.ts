import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_intersection = _test_validate_equals(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.validateEquals(input),
);
