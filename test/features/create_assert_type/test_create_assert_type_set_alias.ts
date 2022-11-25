import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_set_alias = _test_assert_type(
    "aliased set",
    SetAlias.generate,
    TSON.createAssertType<SetAlias>(),
    SetAlias.SPOILERS,
);
