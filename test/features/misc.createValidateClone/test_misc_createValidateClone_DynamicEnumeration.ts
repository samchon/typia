import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_validateClone_DynamicEnumeration =
    _test_misc_validateClone(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        typia.misc.createValidateClone<DynamicEnumeration>(),
        DynamicEnumeration.SPOILERS,
    );
