import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicNever = _test_isStringify(
    "DynamicNever",
    DynamicNever.generate,
    typia.createIsStringify<DynamicNever>(),
    DynamicNever.SPOILERS,
);
