import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_application_swagger_ArrayRepeatedNullable =
  _test_json_application("swagger")("ArrayRepeatedNullable")(
    typia.json.application<[ArrayRepeatedNullable], "swagger">(),
  );
