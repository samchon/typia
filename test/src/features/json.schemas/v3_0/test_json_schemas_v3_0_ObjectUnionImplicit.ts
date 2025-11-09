import typia from "typia";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectUnionImplicit = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectUnionImplicit", 
  })(typia.json.schemas<[ObjectUnionImplicit], "3.0">());