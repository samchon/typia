import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ToJsonTuple = _test_assert(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => TSON.assert(input),
);