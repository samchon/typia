import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_assertGuard_ArrayMatrix = _test_assertGuard(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) => typia.assertGuard<ArrayMatrix>(input));
