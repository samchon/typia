import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_stringify_DynamicComposite = (): void => _test_json_stringify(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((input) => typia.json.stringify<DynamicComposite>(input));
