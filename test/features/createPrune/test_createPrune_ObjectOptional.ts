import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_ObjectOptional = _test_prune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createPrune<ObjectOptional>(),
);
