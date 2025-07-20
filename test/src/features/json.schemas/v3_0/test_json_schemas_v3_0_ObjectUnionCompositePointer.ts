import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_schemas_v3_0_ObjectUnionCompositePointer = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectUnionCompositePointer",
  })(typia.json.schemas<[ObjectUnionCompositePointer], "3.0">());
