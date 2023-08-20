import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_isPrune_TupleOptional = _test_isPrune(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.isPrune<TupleOptional>(input),
    TupleOptional.SPOILERS,
);
