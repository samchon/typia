import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createValidateParse_TupleRestAtomic = (): void => _test_json_validateParse(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)(typia.json.createValidateParse<TupleRestAtomic>());
