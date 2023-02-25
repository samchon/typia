import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicComposite = _test_validateParse(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createValidateParse<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
