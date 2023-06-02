import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createValidate_TupleOptional = _test_validate(
    "TupleOptional",
    TupleOptional.generate,
    typia.createValidate<TupleOptional>(),
    TupleOptional.SPOILERS,
);
