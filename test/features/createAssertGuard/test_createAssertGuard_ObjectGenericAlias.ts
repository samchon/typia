import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertGuard_ObjectGenericAlias = _test_assertGuard(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)(
  typia.createAssertGuard<ObjectGenericAlias>(),
);
