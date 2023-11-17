import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertGuard_DynamicEnumeration = _test_assertGuard(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.assertGuard<DynamicEnumeration>(input),
);
