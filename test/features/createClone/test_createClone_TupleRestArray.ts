import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createClone_TupleRestArray = _test_clone(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createClone<TupleRestArray>(),
);
