import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_validateParse_TupleRestAtomic = _test_json_validateParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.json.createValidateParse<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
