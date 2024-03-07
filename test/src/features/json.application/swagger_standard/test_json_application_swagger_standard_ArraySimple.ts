import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_ArraySimple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArraySimple",
  })(typia.json.application<[ArraySimple], "swagger", false>());
