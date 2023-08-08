import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_validateEquals_TupleOptional = _test_validateEquals(
    "TupleOptional",
    TupleOptional.generate,
    typia.createValidateEquals<TupleOptional>(),
);
