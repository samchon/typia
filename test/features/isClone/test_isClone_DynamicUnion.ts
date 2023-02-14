import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicUnion = _test_isClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.isClone(input),
    DynamicUnion.SPOILERS,
);