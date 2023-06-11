import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_TupleRestArray = _test_validateClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validateClone(input),
    TupleRestArray.SPOILERS,
);
