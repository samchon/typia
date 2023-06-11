import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectInternal = _test_assertPrune(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createAssertPrune<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
