import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicSimple = _test_validateParse(
    "DynamicSimple",
    DynamicSimple.generate,
    TSON.createValidateParse<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);