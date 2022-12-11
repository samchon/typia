import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TupleRestArray = _test_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createValidateParse<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
