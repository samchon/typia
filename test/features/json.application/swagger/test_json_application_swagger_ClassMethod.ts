import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_application_swagger_ClassMethod = _test_json_application(
  "swagger",
)("ClassMethod")(typia.json.application<[ClassMethod], "swagger">());
