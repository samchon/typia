import typia from "../../../../src";
import { TupleUnion } from "../../../structures/TupleUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_TupleUnion = _test_prune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => ((input: TupleUnion): void => {})(input),
);
