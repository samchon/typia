import typia from "../../../src";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_ToJsonTuple = _test_assertClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createAssertClone<ToJsonTuple>(),
);
