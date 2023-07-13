import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_isPrune_TupleOptional = _test_misc_isPrune(
    "TupleOptional",
    TupleOptional.generate,
    typia.misc.createIsPrune<TupleOptional>(),
    TupleOptional.SPOILERS,
);
