import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_simple = _test_validate_equals(
    "simple object",
    ObjectSimple.generate,
    TSON.createValidateEquals<ObjectSimple>(),
);
