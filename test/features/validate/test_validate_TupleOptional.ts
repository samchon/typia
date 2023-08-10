import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_validate_TupleOptional = _test_validate<TupleOptional>(
    TupleOptional,
)((input) => typia.validate<TupleOptional>(input));
