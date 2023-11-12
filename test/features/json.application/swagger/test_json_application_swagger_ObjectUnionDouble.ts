import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_application_swagger_ObjectUnionDouble =
    _test_json_application("swagger")("ObjectUnionDouble")(
        typia.json.application<[ObjectUnionDouble], "swagger">(),
    );
