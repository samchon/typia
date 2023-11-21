import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_application_swagger_TypeTagArray =
  _test_json_application("swagger")("TypeTagArray")(
    typia.json.application<[TypeTagArray], "swagger">(),
  );
