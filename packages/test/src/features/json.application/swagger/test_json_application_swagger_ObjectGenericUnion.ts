import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_json_application_swagger_ObjectGenericUnion =
  _test_json_application("swagger")("ObjectGenericUnion")(
    typia.json.application<[ObjectGenericUnion], "swagger">(),
  );
