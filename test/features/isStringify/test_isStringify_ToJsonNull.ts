import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ToJsonNull = _test_isStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => TSON.isStringify(input),
);
