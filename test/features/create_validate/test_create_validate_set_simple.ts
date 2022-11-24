import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_set_simple = _test_validate(
    "simple set",
    SetSimple.generate,
    TSON.createValidate<SetSimple>(),
    SetSimple.SPOILERS,
);
