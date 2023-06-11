import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_TemplateUnion = _test_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.isStringify(input),
    TemplateUnion.SPOILERS,
);
