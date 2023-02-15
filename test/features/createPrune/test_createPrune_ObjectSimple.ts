import typia from "typia";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectSimple = _test_prune(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createPrune<ObjectSimple>(),
);
