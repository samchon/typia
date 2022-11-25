import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_set_simple = _test_assert_type(
    "simple set",
    SetSimple.generate,
    TSON.createAssertType<SetSimple>(),
    SetSimple.SPOILERS,
);
