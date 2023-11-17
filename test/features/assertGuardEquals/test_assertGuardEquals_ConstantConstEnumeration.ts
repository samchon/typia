import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_assertGuardEquals_ConstantConstEnumeration =
    _test_assertGuardEquals(
        "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
        typia.assertGuardEquals<ConstantConstEnumeration>(input),
    );
