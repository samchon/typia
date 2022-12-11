import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TupleRestObject = _test_clone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.clone(input),
);
