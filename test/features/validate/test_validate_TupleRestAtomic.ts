import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validate_TupleRestAtomic = _test_validate(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validate<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
