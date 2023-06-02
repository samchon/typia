import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_UltimateUnion = _test_assertStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createAssertStringify<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
