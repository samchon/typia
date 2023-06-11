import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_DynamicSimple = _test_validateParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.validateParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
