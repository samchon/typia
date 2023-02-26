import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_isPrune_TupleRestObject = _test_isPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.isPrune(input),
    TupleRestObject.SPOILERS,
);
