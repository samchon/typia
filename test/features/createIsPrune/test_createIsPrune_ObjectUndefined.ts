import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createIsPrune_ObjectUndefined = _test_isPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createIsPrune<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
