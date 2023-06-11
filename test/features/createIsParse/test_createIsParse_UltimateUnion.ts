import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createIsParse_UltimateUnion = _test_isParse(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIsParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
