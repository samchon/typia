import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertGuardEquals_ObjectOptional = _test_assertGuardEquals(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
    typia.assertGuardEquals<ObjectOptional>(input),
);
