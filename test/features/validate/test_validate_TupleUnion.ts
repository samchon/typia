import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TupleUnion = _test_validate(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.validate(input),
    TupleUnion.SPOILERS,
);