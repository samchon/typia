import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicUnion = _test_isParse(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.isParse<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
