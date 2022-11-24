import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_object_intersection =
    _test_validate_equals(
        "intersected object",
        ObjectIntersection.generate,
        TSON.createValidateEquals<ObjectIntersection>(),
    );
