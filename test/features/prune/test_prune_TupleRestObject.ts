import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_prune_TupleRestObject = _test_prune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.prune<TupleRestObject>(input),
);
