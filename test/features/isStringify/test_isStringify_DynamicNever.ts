import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicNever = _test_isStringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.isStringify(input),
    DynamicNever.SPOILERS,
);
