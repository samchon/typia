import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ToJsonNull = _test_isClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => TSON.isClone(input),
);
