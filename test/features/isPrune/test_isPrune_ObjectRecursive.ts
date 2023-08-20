import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_isPrune_ObjectRecursive = _test_isPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isPrune<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
