import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_schemas_v3_1_ObjectDate = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectDate",
  })(typia.json.schemas<[ObjectDate], "3.1">());
