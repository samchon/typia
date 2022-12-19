import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TupleRestAtomic = _test_assertEquals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertEquals<TupleRestAtomic>(),
);