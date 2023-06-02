import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createIsClone_TupleRestArray = _test_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createIsClone<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
