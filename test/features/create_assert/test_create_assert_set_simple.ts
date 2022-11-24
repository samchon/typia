import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_set_simple = _test_assert(
    "simple set",
    SetSimple.generate,
    TSON.createAssert<SetSimple>(),
    SetSimple.SPOILERS,
);
