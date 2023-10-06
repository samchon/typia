import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createIs_TupleRestAtomic = _test_is(
    "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)(typia.createIs<TupleRestAtomic>());
