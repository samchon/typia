import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectTuple = _test_prune(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createPrune<ObjectTuple>(),
);
