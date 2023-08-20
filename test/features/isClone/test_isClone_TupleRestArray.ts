import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_isClone_TupleRestArray = _test_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.isClone<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
