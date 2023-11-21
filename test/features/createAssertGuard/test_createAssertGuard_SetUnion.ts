import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetUnion } from "../../structures/SetUnion";

export const test_createAssertGuard_SetUnion = _test_assertGuard(
  "SetUnion",
)<SetUnion>(SetUnion)(typia.createAssertGuard<SetUnion>());
