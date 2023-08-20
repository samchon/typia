import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validateClone_TupleRestAtomic = _test_validateClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validateClone<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
