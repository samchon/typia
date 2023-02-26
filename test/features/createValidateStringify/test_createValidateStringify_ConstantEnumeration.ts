import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createValidateStringify_ConstantEnumeration =
    _test_validateStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.createValidateStringify<ConstantEnumeration>(),
        ConstantEnumeration.SPOILERS,
    );
