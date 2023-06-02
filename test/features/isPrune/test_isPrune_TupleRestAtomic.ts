import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_isPrune_TupleRestAtomic = _test_isPrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isPrune(input),
    TupleRestAtomic.SPOILERS,
);
