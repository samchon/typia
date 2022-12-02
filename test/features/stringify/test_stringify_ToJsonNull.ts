import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ToJsonNull = _test_stringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => TSON.stringify(input),
);
