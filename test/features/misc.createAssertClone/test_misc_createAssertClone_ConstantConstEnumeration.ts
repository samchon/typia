import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_assertClone_ConstantConstEnumeration =
    _test_misc_assertClone(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.misc.createAssertClone<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
