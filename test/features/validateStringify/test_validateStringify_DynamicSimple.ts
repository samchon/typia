import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicSimple = _test_validateStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.validateStringify(input),
    DynamicSimple.SPOILERS,
);
