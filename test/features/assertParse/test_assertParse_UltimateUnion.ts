import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_UltimateUnion = _test_assertParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.assertParse<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
