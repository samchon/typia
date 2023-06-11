import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createIsPrune_ObjectRecursive = _test_isPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsPrune<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
