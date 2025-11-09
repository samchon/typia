import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TupleRestObject = (): void => _test_json_assertStringify(CustomGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.json.assertStringify<TupleRestObject>(input, (p) => new CustomGuardError(p)));
