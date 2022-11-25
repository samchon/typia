import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_set_simple = _test_equals(
    "simple set",
    SetSimple.generate,
    (input) => TSON.equals(input),
);
