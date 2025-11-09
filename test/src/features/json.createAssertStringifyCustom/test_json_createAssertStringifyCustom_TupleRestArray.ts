import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TupleRestArray = (): void => _test_json_assertStringify(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.json.createAssertStringify<TupleRestArray>((p) => new CustomGuardError(p)));
