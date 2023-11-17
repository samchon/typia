import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertGuardEquals_ArrayMatrix = _test_assertGuardEquals(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.createAssertGuardEquals<ArrayMatrix>());
