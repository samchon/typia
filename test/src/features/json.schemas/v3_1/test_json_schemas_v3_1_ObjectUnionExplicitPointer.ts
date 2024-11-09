import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectUnionExplicitPointer = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionExplicitPointer", 
  })(typia.json.schemas<[ObjectUnionExplicitPointer], "3.1">());