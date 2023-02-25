import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TupleRestArray = _test_assertClone(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssertClone<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
