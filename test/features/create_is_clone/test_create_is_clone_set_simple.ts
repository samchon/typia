import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_set_simple = _test_is_clone(
    "simple set",
    SetSimple.generate,
    TSON.createIsClone<SetSimple>(),
    SetSimple.SPOILERS,
);
