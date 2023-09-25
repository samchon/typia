import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_createIsPrune_TupleRestAtomic = _test_misc_isPrune(
    "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)(
    typia.misc.createIsPrune<TupleRestAtomic>(),
);
