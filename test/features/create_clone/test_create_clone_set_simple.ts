import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_set_simple = _test_clone(
    "simple set",
    SetSimple.generate,
    TSON.createClone<SetSimple>(),
);
