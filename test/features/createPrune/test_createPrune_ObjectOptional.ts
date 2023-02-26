import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createPrune_ObjectOptional = _test_prune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createPrune<ObjectOptional>(),
);
