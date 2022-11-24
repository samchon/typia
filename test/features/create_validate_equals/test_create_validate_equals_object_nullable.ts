import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_object_nullable =
    _test_validate_equals(
        "nullable object",
        ObjectNullable.generate,
        TSON.createValidateEquals<ObjectNullable>(),
    );
