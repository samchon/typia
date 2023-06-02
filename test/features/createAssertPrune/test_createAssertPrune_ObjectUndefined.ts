import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertPrune_ObjectUndefined = _test_assertPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertPrune<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
