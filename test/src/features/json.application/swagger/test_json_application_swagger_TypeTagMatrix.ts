import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_application_swagger_TypeTagMatrix =
  _test_json_application("swagger")("TypeTagMatrix")(
    typia.json.application<[TypeTagMatrix], "swagger">(),
  );
