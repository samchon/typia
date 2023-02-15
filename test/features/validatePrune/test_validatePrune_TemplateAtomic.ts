import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TemplateAtomic = _test_validatePrune(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.validatePrune(input),
    TemplateAtomic.SPOILERS,
);
