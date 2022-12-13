import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectPrimitive = _test_equals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createEquals<ObjectPrimitive>(),
);