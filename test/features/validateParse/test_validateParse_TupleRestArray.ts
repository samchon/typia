import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_validateParse_TupleRestArray = _test_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validateParse<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
