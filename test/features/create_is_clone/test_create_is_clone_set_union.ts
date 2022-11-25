import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_set_union = _test_is_clone(
    "union set",
    SetUnion.generate,
    TSON.createIsClone<SetUnion>(),
    SetUnion.SPOILERS,
);
