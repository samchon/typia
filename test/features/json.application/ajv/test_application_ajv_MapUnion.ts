import typia from "typia"
import { MapUnion } from "../../../structures/MapUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_MapUnion = 
    _test_json_application("ajv")("MapUnion")(
        typia.json.application<[MapUnion], "ajv">(),
    );