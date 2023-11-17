import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assertGuard_ObjectPrimitive = _test_assertGuard(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
    typia.assertGuard<ObjectPrimitive>(input),
);
