import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_json_schemas_v3_0_ObjectGenericUnion = _test_json_schemas({
  version: "3.0",
  name: "ObjectGenericUnion",
})(typia.json.schemas<[ObjectGenericUnion], "3.0">());
