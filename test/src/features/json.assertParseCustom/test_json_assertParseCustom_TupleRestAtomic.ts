import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TupleRestAtomic = (): void => _test_json_assertParse(CustomGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.json.assertParse<TupleRestAtomic>(input, (p) => new CustomGuardError(p)));
