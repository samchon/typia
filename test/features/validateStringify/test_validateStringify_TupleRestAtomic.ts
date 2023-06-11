import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validateStringify_TupleRestAtomic = _test_validateStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validateStringify(input),
    TupleRestAtomic.SPOILERS,
);
