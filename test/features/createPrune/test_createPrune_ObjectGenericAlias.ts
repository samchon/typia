import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectGenericAlias = _test_prune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createPrune<ObjectGenericAlias>(),
);
