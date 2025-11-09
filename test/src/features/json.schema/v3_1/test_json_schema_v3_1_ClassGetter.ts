import typia from "typia";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ClassGetter = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ClassGetter", 
  })(typia.json.schema<ClassGetter, "3.1">());