import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_set_union = _test_assert_type(
    "union set",
    SetUnion.generate,
    TSON.createAssertType<SetUnion>(),
    SetUnion.SPOILERS,
);
