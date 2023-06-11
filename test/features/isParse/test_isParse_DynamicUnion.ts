import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_isParse_DynamicUnion = _test_isParse(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.isParse<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
