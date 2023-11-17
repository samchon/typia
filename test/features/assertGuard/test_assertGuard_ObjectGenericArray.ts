import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertGuard_ObjectGenericArray = _test_assertGuard(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.assertGuard<ObjectGenericArray>(input),
);
