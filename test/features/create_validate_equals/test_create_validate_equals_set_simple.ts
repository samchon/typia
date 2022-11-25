import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_set_simple = _test_validate_equals(
    "simple set",
    SetSimple.generate,
    TSON.createValidateEquals<SetSimple>(),
    false,
);
