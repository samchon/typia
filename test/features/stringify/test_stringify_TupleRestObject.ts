import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_stringify_TupleRestObject = _test_stringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.stringify<TupleRestObject>(input),
);
