import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_schemas_v3_0_ObjectNullable = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectNullable",
  })(typia.json.schemas<[ObjectNullable], "3.0">());
