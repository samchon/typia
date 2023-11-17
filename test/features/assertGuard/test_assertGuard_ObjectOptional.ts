import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertGuard_ObjectOptional = _test_assertGuard(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
    typia.assertGuard<ObjectOptional>(input),
);
