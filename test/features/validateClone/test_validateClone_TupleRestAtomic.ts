import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TupleRestAtomic = _test_validateClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validateClone(input),
    TupleRestAtomic.SPOILERS,
);
