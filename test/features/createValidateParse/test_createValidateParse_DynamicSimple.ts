import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createValidateParse_DynamicSimple = _test_validateParse(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createValidateParse<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
