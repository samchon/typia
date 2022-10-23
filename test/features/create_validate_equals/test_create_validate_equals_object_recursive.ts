import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_recursive =
    _test_validate_equals(
        "recursive object",
        ObjectRecursive.generate,
        TSON.createValidateEquals<ObjectRecursive>(),
    );
