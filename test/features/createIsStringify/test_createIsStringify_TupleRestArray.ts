import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createIsStringify_TupleRestArray = _test_isStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createIsStringify<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
