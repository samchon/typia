import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TemplateUnion = _test_isPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.isPrune(input),
    TemplateUnion.SPOILERS,
);
