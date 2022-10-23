import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_array_recursive = _test_validate(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createValidate<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
