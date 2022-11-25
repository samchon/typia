import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ToJsonDouble = _test_assert(
    "ToJsonDouble",
    ToJsonDouble.generate,
    TSON.createAssert<ToJsonDouble>(),
);
