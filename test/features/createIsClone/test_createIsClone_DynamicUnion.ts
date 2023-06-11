import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createIsClone_DynamicUnion = _test_isClone(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createIsClone<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
