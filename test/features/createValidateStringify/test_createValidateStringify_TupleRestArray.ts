import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TupleRestArray = _test_validateStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidateStringify<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
