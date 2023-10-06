import typia from "typia"
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ObjectGenericAlias = 
    _test_json_application("swagger")("ObjectGenericAlias")(
        typia.json.application<[ObjectGenericAlias], "swagger">(),
    );