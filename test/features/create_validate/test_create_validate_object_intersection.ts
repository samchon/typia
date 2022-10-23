import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_intersection = _test_validate(
    "intersected object",
    ObjectIntersection.generate,
    TSON.createValidate<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
