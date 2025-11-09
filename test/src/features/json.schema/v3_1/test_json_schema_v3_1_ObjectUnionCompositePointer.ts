import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_schema_v3_1_ObjectUnionCompositePointer = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectUnionCompositePointer",
  })(typia.json.schema<ObjectUnionCompositePointer, "3.1">());
