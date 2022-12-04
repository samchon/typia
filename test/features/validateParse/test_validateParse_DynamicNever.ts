import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicNever = _test_validateParse(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.validateParse<DynamicNever>(input),
    DynamicNever.SPOILERS,
);
