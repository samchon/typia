import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_TupleOptional = _test_equals(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.equals(input),
);
