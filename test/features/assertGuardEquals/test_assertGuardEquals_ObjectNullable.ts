import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertGuardEquals_ObjectNullable = _test_assertGuardEquals(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
    typia.assertGuardEquals<ObjectNullable>(input),
);
