import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_TupleOptional = _test_assertPrune(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.assertPrune(input),
    TupleOptional.SPOILERS,
);
