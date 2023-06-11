import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_TupleOptional = _test_equals(
    "TupleOptional",
    TupleOptional.generate,
    typia.createEquals<TupleOptional>(),
);
