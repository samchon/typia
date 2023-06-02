import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createValidateParse_DynamicNever = _test_validateParse(
    "DynamicNever",
    DynamicNever.generate,
    typia.createValidateParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
