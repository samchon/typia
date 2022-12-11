import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TupleRestArray = _test_validateClone(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createValidateClone<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
