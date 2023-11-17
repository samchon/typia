import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_assertGuard_ToJsonDouble = _test_assertGuard(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertGuard<ToJsonDouble>(input),
);
