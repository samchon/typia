import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_isParse_ToJsonUnion = _test_json_isParse(
    "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) => typia.json.isParse<ToJsonUnion>(input));
