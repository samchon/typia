import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_isParse_ToJsonDouble = _test_json_isParse(
    "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
    typia.json.isParse<ToJsonDouble>(input),
);
