import typia from "../../../src";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_TemplateAtomic = _test_validateStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    (input) => typia.validateStringify(input),
    TemplateAtomic.SPOILERS,
);
