import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_stringify_TupleRestAtomic = _test_stringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.stringify<TupleRestAtomic>(input),
);
