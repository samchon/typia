import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createValidateClone_DynamicUnion = _test_validateClone(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createValidateClone<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
