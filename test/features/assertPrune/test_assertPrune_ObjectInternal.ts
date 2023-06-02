import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertPrune_ObjectInternal = _test_assertPrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.assertPrune(input),
    ObjectInternal.SPOILERS,
);
