import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createValidateEquals_ObjectPrimitive = _test_validateEquals(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(
    typia.createValidateEquals<ObjectPrimitive>(),
);
