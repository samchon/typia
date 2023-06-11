import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_TupleOptional = _test_validatePrune(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.validatePrune(input),
    TupleOptional.SPOILERS,
);
