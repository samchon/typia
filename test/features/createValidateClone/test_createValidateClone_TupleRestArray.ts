import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createValidateClone_TupleRestArray = _test_validateClone(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidateClone<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
