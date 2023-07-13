import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_isParse_TupleRestAtomic = _test_json_isParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.json.createIsParse<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
