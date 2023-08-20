import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_validateClone_TupleRestArray = _test_validateClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validateClone<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
