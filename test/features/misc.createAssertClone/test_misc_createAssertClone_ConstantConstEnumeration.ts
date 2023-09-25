import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createAssertClone_ConstantConstEnumeration =
    _test_misc_assertClone(
        "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
        typia.misc.createAssertClone<ConstantConstEnumeration>(),
    );
