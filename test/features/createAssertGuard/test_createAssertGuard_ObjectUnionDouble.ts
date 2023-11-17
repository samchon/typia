import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertGuard_ObjectUnionDouble = _test_assertGuard(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.createAssertGuard<ObjectUnionDouble>(),
);
