import typia from "../../../src";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TupleUnion = _test_validate(
    "TupleUnion",
    TupleUnion.generate,
    typia.createValidate<TupleUnion>(),
    TupleUnion.SPOILERS,
);
