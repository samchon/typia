import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertPrune_TupleOptional = _test_assertPrune(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.assertPrune(input),
    TupleOptional.SPOILERS,
);
