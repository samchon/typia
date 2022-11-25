import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicUnion = _test_assertClone(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createAssertClone<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);