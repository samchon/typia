import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_schemas_v3_1_TypeTagType = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagType",
  })(typia.json.schemas<[TypeTagType], "3.1">());
