import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ToJsonTuple = _test_assertClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => TSON.assertClone(input),
);
