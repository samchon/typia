import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TupleRestAtomic = _test_validate(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createValidate<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
