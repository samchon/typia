import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createIs_ObjectPrimitive = _test_is(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createIs<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
