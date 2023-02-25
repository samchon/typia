import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectUndefined = _test_isPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createIsPrune<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
