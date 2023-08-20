import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertPrune_ObjectUndefined = _test_assertPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.assertPrune<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
