import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_DynamicEnumeration = _test_validateStringify(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.validateStringify(input),
    DynamicEnumeration.SPOILERS,
);
