import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TupleOptional = _test_isPrune(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.isPrune(input),
    TupleOptional.SPOILERS,
);
