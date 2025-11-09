import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ClassGetter = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ClassGetter", 
  })(typia.json.schemas<[ClassGetter], "3.1">());