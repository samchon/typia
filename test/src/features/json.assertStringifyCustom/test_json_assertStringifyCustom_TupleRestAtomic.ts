import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TupleRestAtomic = (): void => _test_json_assertStringify(CustomGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.json.assertStringify<TupleRestAtomic>(input, (p) => new CustomGuardError(p)));
