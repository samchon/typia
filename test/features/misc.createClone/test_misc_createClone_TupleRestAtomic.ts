import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_clone_TupleRestAtomic = _test_misc_clone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.misc.createClone<TupleRestAtomic>(),
);
