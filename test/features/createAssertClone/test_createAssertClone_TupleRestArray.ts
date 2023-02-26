import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertClone_TupleRestArray = _test_assertClone(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssertClone<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
