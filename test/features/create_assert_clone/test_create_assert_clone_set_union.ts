import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_set_union = _test_assert_clone(
    "union set",
    SetUnion.generate,
    TSON.createAssertClone<SetUnion>(),
    SetUnion.SPOILERS,
);
