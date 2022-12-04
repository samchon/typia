import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicEnumeration =
    _test_validateStringify(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        TSON.createValidateStringify<DynamicEnumeration>(),
        DynamicEnumeration.SPOILERS,
    );
