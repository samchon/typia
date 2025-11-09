import typia from "typia";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectUnionExplicit = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectUnionExplicit", 
  })(typia.json.schemas<[ObjectUnionExplicit], "3.0">());