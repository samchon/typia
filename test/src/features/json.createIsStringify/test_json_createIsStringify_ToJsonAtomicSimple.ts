import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_json_createIsStringify_ToJsonAtomicSimple = (): void => _test_json_isStringify(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(
    ToJsonAtomicSimple
)(typia.json.createIsStringify<ToJsonAtomicSimple>());
