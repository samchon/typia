import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertGuardEquals_ObjectSimple = _test_assertGuardEquals(
    "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
    typia.assertGuardEquals<ObjectSimple>(input),
);
