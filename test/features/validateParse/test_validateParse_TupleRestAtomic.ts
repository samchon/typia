import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TupleRestAtomic = _test_validateParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validateParse<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
