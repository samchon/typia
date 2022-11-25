import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_set_union = _test_clone(
    "union set",
    SetUnion.generate,
    TSON.createClone<SetUnion>(),
);
