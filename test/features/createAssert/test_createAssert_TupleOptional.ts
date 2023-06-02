import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssert_TupleOptional = _test_assert(
    "TupleOptional",
    TupleOptional.generate,
    typia.createAssert<TupleOptional>(),
    TupleOptional.SPOILERS,
);
