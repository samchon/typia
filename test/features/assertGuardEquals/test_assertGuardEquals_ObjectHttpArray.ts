import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_assertGuardEquals_ObjectHttpArray = _test_assertGuardEquals(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
    typia.assertGuardEquals<ObjectHttpArray>(input),
);
