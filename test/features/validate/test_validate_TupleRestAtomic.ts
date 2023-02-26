import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TupleRestAtomic = _test_validate(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validate(input),
    TupleRestAtomic.SPOILERS,
);
