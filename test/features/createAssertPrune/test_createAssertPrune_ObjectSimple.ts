import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectSimple = _test_assertPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createAssertPrune<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
