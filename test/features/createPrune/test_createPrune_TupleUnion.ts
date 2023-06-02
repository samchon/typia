import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createPrune_TupleUnion = _test_prune(
    "TupleUnion",
    TupleUnion.generate,
    typia.createPrune<TupleUnion>(),
);
