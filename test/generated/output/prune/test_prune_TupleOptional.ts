import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_prune_TupleOptional = _test_prune(
    "TupleOptional",
    TupleOptional.generate,
    (input) => ((input: TupleOptional): void => {})(input),
);
