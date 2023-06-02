import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_isParse_UltimateUnion = _test_isParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.isParse<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
