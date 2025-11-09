import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_schemas_v3_1_ObjectUnionExplicitPointer = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionExplicitPointer",
  })(typia.json.schemas<[ObjectUnionExplicitPointer], "3.1">());
