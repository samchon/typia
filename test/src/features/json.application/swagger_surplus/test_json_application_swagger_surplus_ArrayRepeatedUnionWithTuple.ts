import typia from "typia";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.json.application<[ArrayRepeatedUnionWithTuple], "swagger", true>());
