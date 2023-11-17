import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

export const test_assertGuard_SetUnion = _test_assertGuard(
  "SetUnion",
)<SetUnion>(SetUnion)((input) => typia.assertGuard<SetUnion>(input));
