import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicUndefined = _test_validateParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.validateParse<DynamicUndefined>(input),
    DynamicUndefined.SPOILERS,
);
