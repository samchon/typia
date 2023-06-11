import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_TemplateUnion = _test_prune(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.prune(input),
);
