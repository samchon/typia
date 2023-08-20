import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_clone_TupleRestObject = _test_clone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.clone<TupleRestObject>(input),
);
