import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_is_TupleOptional = _test_is(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.is<TupleOptional>(input),
    TupleOptional.SPOILERS,
);
