import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertClone_DynamicUnion = _test_assertClone(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createAssertClone<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
