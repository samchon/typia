import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_swagger_ArrayRepeatedUnionWithTuple =
  _test_json_application("swagger")("ArrayRepeatedUnionWithTuple")(
    typia.json.application<[ArrayRepeatedUnionWithTuple], "swagger">(),
  );
