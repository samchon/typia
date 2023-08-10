import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";

export const test_json_application_swagger_TupleRestArray =
    _test_json_application("swagger")("TupleRestArray")(
        typia.json.application<[TupleRestArray], "swagger">(),
    );
