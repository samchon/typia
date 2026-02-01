import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createStringify_DynamicNever = (): void => _test_json_stringify(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.json.createStringify<DynamicNever>());
