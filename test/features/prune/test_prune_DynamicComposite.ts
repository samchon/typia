import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_DynamicComposite = _test_prune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.prune(input),
);
