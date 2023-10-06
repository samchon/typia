import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_isClone_TupleRestAtomic = _test_misc_isClone(
    "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
    typia.misc.isClone<TupleRestAtomic>(input),
);
