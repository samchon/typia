import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_ajv_ArrayRepeatedUnionWithTuple =
  _test_json_application("ajv")("ArrayRepeatedUnionWithTuple")(
    typia.json.application<[ArrayRepeatedUnionWithTuple], "ajv">(),
  );
