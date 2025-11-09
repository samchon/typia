import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectGenericArray = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectGenericArray", 
  })(typia.json.schemas<[ObjectGenericArray], "3.1">());