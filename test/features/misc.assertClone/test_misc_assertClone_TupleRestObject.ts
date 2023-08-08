import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_assertClone_TupleRestObject = _test_misc_assertClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.misc.assertClone(input),
    TupleRestObject.SPOILERS,
);
