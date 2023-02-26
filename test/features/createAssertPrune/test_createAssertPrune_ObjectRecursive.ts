import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertPrune_ObjectRecursive = _test_assertPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createAssertPrune<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
