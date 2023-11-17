import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assertGuard_ConstantEnumeration = _test_assertGuard(
    "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
    typia.assertGuard<ConstantEnumeration>(input),
);
