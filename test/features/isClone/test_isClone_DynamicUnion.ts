import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_isClone_DynamicUnion = _test_isClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.isClone<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
