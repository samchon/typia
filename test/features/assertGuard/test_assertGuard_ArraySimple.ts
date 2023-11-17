import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertGuard_ArraySimple = _test_assertGuard(
    "ArraySimple",
)<ArraySimple>(ArraySimple)((input) => typia.assertGuard<ArraySimple>(input));
