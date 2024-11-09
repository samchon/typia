import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectGenericArray = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectGenericArray", 
  })(typia.json.schemas<[ObjectGenericArray], "3.0">());