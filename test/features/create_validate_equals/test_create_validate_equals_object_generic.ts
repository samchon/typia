import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_generic = _test_validate_equals(
    "generic object",
    ObjectGeneric.generate,
    TSON.createValidateEquals<ObjectGeneric>(),
);
