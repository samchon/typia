import typia from "typia";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectUndefined = _test_assertPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertPrune<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
