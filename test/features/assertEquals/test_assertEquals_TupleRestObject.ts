import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TupleRestObject = _test_assertEquals(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.assertEquals(input),
);
