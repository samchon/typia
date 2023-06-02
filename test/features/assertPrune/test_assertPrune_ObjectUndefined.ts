import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_ObjectUndefined = _test_assertPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertPrune(input),
    ObjectUndefined.SPOILERS,
);
