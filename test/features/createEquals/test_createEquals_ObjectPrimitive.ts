import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_equals_ObjectPrimitive = _test_equals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createEquals<ObjectPrimitive>(),
);
