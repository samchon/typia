import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertGuard_ObjectUnionImplicit = _test_assertGuard(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.assertGuard<ObjectUnionImplicit>(input),
);
