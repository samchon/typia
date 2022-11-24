import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_set_simple = _test_equals(
    "simple set",
    SetSimple.generate,
    TSON.createEquals<SetSimple>(),
);
