import typia from "typia"
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_TupleRestArray = 
    _test_json_application("swagger")("TupleRestArray")(
        typia.json.application<[TupleRestArray], "swagger">(),
    );