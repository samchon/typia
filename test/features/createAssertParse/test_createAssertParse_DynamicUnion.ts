import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertParse_DynamicUnion = _test_assertParse(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createAssertParse<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
