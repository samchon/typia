import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectPrimitive = _test_validateEquals(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidateEquals<ObjectPrimitive>(),
);
