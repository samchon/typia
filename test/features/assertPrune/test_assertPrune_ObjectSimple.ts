import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectSimple = _test_assertPrune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.assertPrune(input),
    ObjectSimple.SPOILERS,
);
