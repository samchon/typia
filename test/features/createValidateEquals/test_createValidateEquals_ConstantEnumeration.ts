import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createValidateEquals_ConstantEnumeration =
    _test_validateEquals(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.createValidateEquals<ConstantEnumeration>(),
    );
