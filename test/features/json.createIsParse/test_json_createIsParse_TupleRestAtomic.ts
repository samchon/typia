import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createIsParse_TupleRestAtomic = _test_json_isParse(
    "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)(
    typia.json.createIsParse<TupleRestAtomic>(),
);
