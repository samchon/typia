import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TemplateUnion = _test_assertClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assertClone(input),
    TemplateUnion.SPOILERS,
);
