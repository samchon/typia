import typia from "../../../src";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicUnion = _test_validateParse(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.validateParse<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
