import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_schemas_v3_0_ObjectPropertyNullable = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectPropertyNullable",
  })(typia.json.schemas<[ObjectPropertyNullable], "3.0">());
