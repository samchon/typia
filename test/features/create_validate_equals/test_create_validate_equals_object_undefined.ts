import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_undefined =
    _test_validate_equals(
        "undefined object",
        ObjectUndefied.generate,
        TSON.createValidateEquals<ObjectUndefied>(),
    );
