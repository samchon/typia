import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TupleRestAtomic = _test_validateEquals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createValidateEquals<TupleRestAtomic>(),
);
