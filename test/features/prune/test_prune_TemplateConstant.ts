import typia from "../../../src";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_TemplateConstant = _test_prune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.prune(input),
);
