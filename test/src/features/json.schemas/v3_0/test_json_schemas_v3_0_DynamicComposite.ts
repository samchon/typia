import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_schemas_v3_0_DynamicComposite = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "DynamicComposite",
  })(typia.json.schemas<[DynamicComposite], "3.0">());
