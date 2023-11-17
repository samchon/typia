import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_application_swagger_ConstantConstEnumeration =
  _test_json_application("swagger")("ConstantConstEnumeration")(
    typia.json.application<[ConstantConstEnumeration], "swagger">(),
  );
