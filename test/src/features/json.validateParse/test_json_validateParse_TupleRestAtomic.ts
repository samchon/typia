import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_validateParse_TupleRestAtomic = (): void => _test_json_validateParse(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.json.validateParse<TupleRestAtomic>(input));
