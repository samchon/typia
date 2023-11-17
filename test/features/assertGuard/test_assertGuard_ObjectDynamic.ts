import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertGuard_ObjectDynamic = _test_assertGuard(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  typia.assertGuard<ObjectDynamic>(input),
);
