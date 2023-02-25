import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectInternal = _test_prune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.prune(input),
);
