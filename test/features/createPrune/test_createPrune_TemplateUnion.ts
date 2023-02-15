import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TemplateUnion = _test_prune(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createPrune<TemplateUnion>(),
);
