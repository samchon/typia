import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_isPrune_ObjectPrimitive = _test_isPrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.isPrune<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
