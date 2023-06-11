import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_UltimateUnion = _test_isStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.isStringify(input),
    UltimateUnion.SPOILERS,
);
