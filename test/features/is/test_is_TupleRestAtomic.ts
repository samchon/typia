import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_is } from "../internal/_test_is";

export const test_is_TupleRestAtomic = _test_is(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => TSON.is(input),
    TupleRestAtomic.SPOILERS,
);
