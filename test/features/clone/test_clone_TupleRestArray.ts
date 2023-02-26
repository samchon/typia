import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_clone_TupleRestArray = _test_clone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.clone(input),
);
