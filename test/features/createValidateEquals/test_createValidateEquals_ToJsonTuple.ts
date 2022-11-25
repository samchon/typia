import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ToJsonTuple = _test_validateEquals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    TSON.createValidateEquals<ToJsonTuple>(),
);