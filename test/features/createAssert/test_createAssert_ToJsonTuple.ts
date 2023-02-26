import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssert_ToJsonTuple = _test_assert(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createAssert<ToJsonTuple>(),
);
