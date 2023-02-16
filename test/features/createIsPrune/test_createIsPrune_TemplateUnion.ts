import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TemplateUnion = _test_isPrune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createIsPrune<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
