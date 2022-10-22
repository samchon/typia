import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate } from "./_test_validate";

export const test_validate_object_intersection = _test_validate(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.validate(input),
    ObjectIntersection.SPOILERS,
);
