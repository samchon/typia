import typia from "typia";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectUnionCompositePointer = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionCompositePointer", 
  })(typia.json.schemas<[ObjectUnionCompositePointer], "3.1">());