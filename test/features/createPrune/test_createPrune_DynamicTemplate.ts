import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createPrune_DynamicTemplate = _test_prune(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createPrune<DynamicTemplate>(),
);
