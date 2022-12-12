import typia from "../../../src";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ConstantEnumeration =
    _test_validateEquals(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.createValidateEquals<ConstantEnumeration>(),
    );
