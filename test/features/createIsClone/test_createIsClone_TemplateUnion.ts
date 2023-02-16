import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TemplateUnion = _test_isClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createIsClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
