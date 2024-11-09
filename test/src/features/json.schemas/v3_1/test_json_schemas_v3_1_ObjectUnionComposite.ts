import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectUnionComposite = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionComposite", 
  })(typia.json.schemas<[ObjectUnionComposite], "3.1">());