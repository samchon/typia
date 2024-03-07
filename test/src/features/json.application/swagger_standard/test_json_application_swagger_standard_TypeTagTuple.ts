import typia from "typia";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_TypeTagTuple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TypeTagTuple",
  })(typia.json.application<[TypeTagTuple], "swagger", false>());
