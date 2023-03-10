import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createValidateStringify_DynamicEnumeration =
    _test_validateStringify(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        typia.createValidateStringify<DynamicEnumeration>(),
        DynamicEnumeration.SPOILERS,
    );
