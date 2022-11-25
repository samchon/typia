import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_set_simple = _test_assert_clone(
    "simple set",
    SetSimple.generate,
    TSON.createAssertClone<SetSimple>(),
    SetSimple.SPOILERS,
);
