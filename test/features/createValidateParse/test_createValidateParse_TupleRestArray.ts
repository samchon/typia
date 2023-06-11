import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createValidateParse_TupleRestArray = _test_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidateParse<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
