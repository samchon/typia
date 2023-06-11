import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_clone_TupleRestAtomic = _test_clone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.clone(input),
);
