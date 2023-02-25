import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectTuple = _test_assertPrune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createAssertPrune<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
