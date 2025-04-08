import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_schema_v3_0_ObjectUnionExplicitPointer =
  _test_json_schema({
    version: "3.0",
    name: "ObjectUnionExplicitPointer",
  })(typia.json.schema<ObjectUnionExplicitPointer, "3.0">());
