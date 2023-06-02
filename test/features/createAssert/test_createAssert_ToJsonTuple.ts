import typia from "../../../src";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ToJsonTuple = _test_assert(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createAssert<ToJsonTuple>(),
);
