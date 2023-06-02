import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createValidateParse_DynamicUnion = _test_validateParse(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createValidateParse<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
