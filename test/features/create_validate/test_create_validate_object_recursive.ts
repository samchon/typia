import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_recursive = _test_validate(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createValidate<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
