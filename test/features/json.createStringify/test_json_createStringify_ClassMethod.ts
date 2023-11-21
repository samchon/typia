import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_createStringify_ClassMethod = _test_json_stringify(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.json.createStringify<ClassMethod>());
