import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createClone_TupleRestAtomic = _test_clone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createClone<TupleRestAtomic>(),
);
