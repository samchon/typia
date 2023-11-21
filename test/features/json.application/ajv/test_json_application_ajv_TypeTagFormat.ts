import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_json_application_ajv_TypeTagFormat = _test_json_application(
  "ajv",
)("TypeTagFormat")(typia.json.application<[TypeTagFormat], "ajv">());
