import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_DynamicComposite = _test_prune(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createPrune<DynamicComposite>(),
);
