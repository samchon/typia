import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_TupleOptional = _test_validateEquals(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.validateEquals(input),
);
