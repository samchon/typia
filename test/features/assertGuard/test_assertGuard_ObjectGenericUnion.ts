import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertGuard_ObjectGenericUnion = _test_assertGuard(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.assertGuard<ObjectGenericUnion>(input),
);
