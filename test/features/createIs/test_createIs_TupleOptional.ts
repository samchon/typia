import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TupleOptional = _test_is(
    "TupleOptional",
    TupleOptional.generate,
    typia.createIs<TupleOptional>(),
    TupleOptional.SPOILERS,
);
