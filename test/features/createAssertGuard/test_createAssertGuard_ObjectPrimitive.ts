import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertGuard_ObjectPrimitive = _test_assertGuard(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(typia.createAssertGuard<ObjectPrimitive>());
