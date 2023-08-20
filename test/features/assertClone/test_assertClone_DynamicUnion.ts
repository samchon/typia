import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertClone_DynamicUnion = _test_assertClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.assertClone<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
