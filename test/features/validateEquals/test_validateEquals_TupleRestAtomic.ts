import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validateEquals_TupleRestAtomic = _test_validateEquals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validateEquals(input),
);
