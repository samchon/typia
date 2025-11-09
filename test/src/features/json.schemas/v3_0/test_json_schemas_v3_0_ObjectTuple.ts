import typia from "typia";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectTuple = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectTuple", 
  })(typia.json.schemas<[ObjectTuple], "3.0">());