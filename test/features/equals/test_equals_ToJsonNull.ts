import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonNull = _test_equals(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => TSON.equals(input),
);
