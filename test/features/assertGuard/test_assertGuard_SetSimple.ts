import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { SetSimple } from "../../structures/SetSimple";

export const test_assertGuard_SetSimple = _test_assertGuard(
    "SetSimple",
)<SetSimple>(SetSimple)((input) => typia.assertGuard<SetSimple>(input));
