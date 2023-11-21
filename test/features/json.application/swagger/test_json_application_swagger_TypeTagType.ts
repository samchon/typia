import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_json_application_swagger_TypeTagType = _test_json_application(
  "swagger",
)("TypeTagType")(typia.json.application<[TypeTagType], "swagger">());
