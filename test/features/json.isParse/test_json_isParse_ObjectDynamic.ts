import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_isParse_ObjectDynamic =
    _test_json_isParse<ObjectDynamic>(ObjectDynamic)((input) =>
        typia.json.isParse<ObjectDynamic>(input),
    );
