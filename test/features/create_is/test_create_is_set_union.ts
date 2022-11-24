import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_is } from "../internal/_test_is";

export const test_create_is_set_union = _test_is(
    "union set",
    SetUnion.generate,
    TSON.createIs<SetUnion>(),
    SetUnion.SPOILERS,
);
