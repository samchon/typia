import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TemplateUnion = _test_isStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createIsStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
