import TSON from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonUndefined = _test_is(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => TSON.is(input),
);