import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicUnion = _test_assertParse(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createAssertParse<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
