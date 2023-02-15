import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TemplateUnion = _test_assertClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createAssertClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
