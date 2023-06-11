import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_validateParse_DynamicSimple = _test_validateParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.validateParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
