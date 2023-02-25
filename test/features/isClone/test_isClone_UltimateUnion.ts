import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_UltimateUnion = _test_isClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.isClone(input),
    UltimateUnion.SPOILERS,
);
