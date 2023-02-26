import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createValidateStringify_ConstantConstEnumeration =
    _test_validateStringify(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.createValidateStringify<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
