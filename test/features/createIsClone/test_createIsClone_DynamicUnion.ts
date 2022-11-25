import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_DynamicUnion = _test_isClone(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createIsClone<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
