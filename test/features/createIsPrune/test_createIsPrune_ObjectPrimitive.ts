import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createIsPrune_ObjectPrimitive = _test_isPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createIsPrune<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
