import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectRecursive = _test_assertPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertPrune(input),
    ObjectRecursive.SPOILERS,
);