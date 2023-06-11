import typia from "../../../src";

import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_DynamicTemplate = _test_prune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createPrune<DynamicTemplate>(),
);
