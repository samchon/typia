import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_TemplateAtomic = _test_validateClone(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.validateClone(input),
    TemplateAtomic.SPOILERS,
);
