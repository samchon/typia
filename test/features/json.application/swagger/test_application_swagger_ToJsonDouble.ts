import typia from "typia"
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_ToJsonDouble = 
    _test_json_application("swagger")("ToJsonDouble")(
        typia.json.application<[ToJsonDouble], "swagger">(),
    );