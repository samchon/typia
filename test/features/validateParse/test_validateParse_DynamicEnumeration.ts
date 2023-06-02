import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_validateParse_DynamicEnumeration = _test_validateParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.validateParse<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);
