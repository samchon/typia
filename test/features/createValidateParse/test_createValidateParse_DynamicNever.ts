import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicNever = _test_validateParse(
    "DynamicNever",
    DynamicNever.generate,
    TSON.createValidateParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
