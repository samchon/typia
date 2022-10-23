import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate } from "./_test_validate";

export const test_validate_object_recursive = _test_validate(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.validate(input),
    ObjectRecursive.SPOILERS,
);
