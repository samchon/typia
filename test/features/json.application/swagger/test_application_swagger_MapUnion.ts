import typia from "typia"
import { MapUnion } from "../../../structures/MapUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_MapUnion = 
    _test_json_application("swagger")("MapUnion")(
        typia.json.application<[MapUnion], "swagger">(),
    );