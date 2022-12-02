import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ToJsonTuple = _test_isStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => TSON.isStringify(input),
);
