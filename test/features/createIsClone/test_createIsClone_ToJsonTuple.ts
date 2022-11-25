import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ToJsonTuple = _test_isClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    TSON.createIsClone<ToJsonTuple>(),
);
