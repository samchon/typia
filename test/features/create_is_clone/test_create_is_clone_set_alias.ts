import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_set_alias = _test_is_clone(
    "aliased set",
    SetAlias.generate,
    TSON.createIsClone<SetAlias>(),
    SetAlias.SPOILERS,
);
