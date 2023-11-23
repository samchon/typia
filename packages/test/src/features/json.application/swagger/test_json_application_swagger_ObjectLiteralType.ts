import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_application_swagger_ObjectLiteralType =
  _test_json_application("swagger")("ObjectLiteralType")(
    typia.json.application<[ObjectLiteralType], "swagger">(),
  );
