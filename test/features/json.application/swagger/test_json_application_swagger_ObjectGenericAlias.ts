import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_application_swagger_ObjectGenericAlias =
  _test_json_application("swagger")("ObjectGenericAlias")(
    typia.json.application<[ObjectGenericAlias], "swagger">(),
  );
