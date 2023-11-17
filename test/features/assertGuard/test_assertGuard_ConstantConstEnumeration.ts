import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertGuard_ConstantConstEnumeration = _test_assertGuard(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
    typia.assertGuard<ConstantConstEnumeration>(input),
);
