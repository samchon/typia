import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TupleRestAtomic = _test_clone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => TSON.clone(input),
);
