import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_set_union = _test_equals(
    "union set",
    SetUnion.generate,
    (input) => TSON.equals(input),
    0,
);
