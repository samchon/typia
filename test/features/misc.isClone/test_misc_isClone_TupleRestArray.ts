import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_isClone_TupleRestArray = _test_misc_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.misc.isClone(input),
    TupleRestArray.SPOILERS,
);
