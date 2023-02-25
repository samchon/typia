import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicSimple = _test_isStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createIsStringify<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
