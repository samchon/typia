import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_set_union = _test_is(
    "union set",
    SetUnion.generate,
    (input) => TSON.is(input),
    SetUnion.SPOILERS,
);
