import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createValidateParse_TupleRestAtomic = _test_validateParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createValidateParse<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
