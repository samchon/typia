import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_validateParse_DynamicNever = _test_validateParse(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.validateParse<DynamicNever>(input),
    DynamicNever.SPOILERS,
);
