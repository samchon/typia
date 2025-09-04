import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_schema_v3_0_ObjectUnionCompositePointer = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectUnionCompositePointer",
  })(typia.json.schema<ObjectUnionCompositePointer, "3.0">());
