import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TupleOptional = _test_validate(
    "TupleOptional",
    TupleOptional.generate,
    typia.createValidate<TupleOptional>(),
    TupleOptional.SPOILERS,
);
