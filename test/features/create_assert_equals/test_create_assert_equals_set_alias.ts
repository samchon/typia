import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_set_alias = _test_assert_equals(
    "aliased set",
    SetAlias.generate,
    TSON.createAssertEquals<SetAlias>(),
    false,
);
