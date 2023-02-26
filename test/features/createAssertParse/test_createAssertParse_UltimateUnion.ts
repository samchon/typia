import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssertParse_UltimateUnion = _test_assertParse(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createAssertParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
