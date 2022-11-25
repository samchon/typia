import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ToJsonTuple = _test_validateEquals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => TSON.validateEquals(input),
);
