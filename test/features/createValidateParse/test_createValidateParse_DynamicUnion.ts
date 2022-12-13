import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicUnion = _test_validateParse(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createValidateParse<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);