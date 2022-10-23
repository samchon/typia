import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_array_recursive =
    _test_validate_equals(
        "recursive array",
        ArrayRecursive.generate,
        TSON.createValidateEquals<ArrayRecursive>(),
    );
