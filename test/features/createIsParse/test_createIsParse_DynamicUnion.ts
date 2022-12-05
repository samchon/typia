import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicUnion = _test_isParse(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createIsParse<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
