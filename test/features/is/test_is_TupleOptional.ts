import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_is } from "../../internal/_test_is";

export const test_is_TupleOptional = _test_is(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.is(input),
    TupleOptional.SPOILERS,
);
