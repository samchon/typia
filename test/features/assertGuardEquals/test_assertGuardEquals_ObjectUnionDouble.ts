import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertGuardEquals_ObjectUnionDouble = _test_assertGuardEquals(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.assertGuardEquals<ObjectUnionDouble>(input),
);
