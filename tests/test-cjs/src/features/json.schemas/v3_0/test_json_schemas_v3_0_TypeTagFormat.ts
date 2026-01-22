import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_schemas_v3_0_TypeTagFormat = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagFormat",
  })(typia.json.schemas<[TypeTagFormat], "3.0">());
