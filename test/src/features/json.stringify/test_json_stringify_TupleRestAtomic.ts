import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_stringify_TupleRestAtomic = (): void => _test_json_stringify(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.json.stringify<TupleRestAtomic>(input));
