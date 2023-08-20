import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_validateStringify_DynamicEnumeration =
    _test_validateStringify(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        (input) => typia.validateStringify<DynamicEnumeration>(input),
        DynamicEnumeration.SPOILERS,
    );
