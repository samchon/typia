import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_UltimateUnion = _test_isParse(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIsParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
