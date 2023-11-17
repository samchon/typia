import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertGuard_ObjectUnionExplicit = _test_assertGuard(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)(
  typia.createAssertGuard<ObjectUnionExplicit>(),
);
