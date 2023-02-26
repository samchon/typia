import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertEquals_TupleRestObject = _test_assertEquals(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.assertEquals(input),
);
