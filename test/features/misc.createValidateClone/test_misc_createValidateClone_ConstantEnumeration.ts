import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_validateClone_ConstantEnumeration =
    _test_misc_validateClone(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.misc.createValidateClone<ConstantEnumeration>(),
        ConstantEnumeration.SPOILERS,
    );
