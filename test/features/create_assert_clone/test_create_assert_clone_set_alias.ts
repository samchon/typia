import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_set_alias = _test_assert_clone(
    "aliased set",
    SetAlias.generate,
    TSON.createAssertClone<SetAlias>(),
    SetAlias.SPOILERS,
);
