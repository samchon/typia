import TSON from "../../../src";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonTuple = _test_assertEquals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    TSON.createAssertEquals<ToJsonTuple>(),
);
