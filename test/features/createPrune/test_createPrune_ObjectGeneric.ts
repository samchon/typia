import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectGeneric = _test_prune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createPrune<ObjectGeneric>(),
);
