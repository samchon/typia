import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_equals_TupleRestAtomic = _test_equals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createEquals<TupleRestAtomic>(),
);
