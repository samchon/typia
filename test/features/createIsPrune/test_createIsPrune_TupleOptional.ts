import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createIsPrune_TupleOptional = _test_isPrune(
    "TupleOptional",
    TupleOptional.generate,
    typia.createIsPrune<TupleOptional>(),
    TupleOptional.SPOILERS,
);
