import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_primitive =
    _test_validate_equals(
        "primitive object",
        ObjectPrimitive.generate,
        TSON.createValidateEquals<ObjectPrimitive>(),
    );
