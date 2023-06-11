import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertParse_UltimateUnion = _test_assertParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.assertParse<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
