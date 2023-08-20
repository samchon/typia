import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_validateStringify_TupleRestArray = _test_validateStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validateStringify<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
