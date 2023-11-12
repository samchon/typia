import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_application_swagger_ObjectDynamic =
    _test_json_application("swagger")("ObjectDynamic")(
        typia.json.application<[ObjectDynamic], "swagger">(),
    );
