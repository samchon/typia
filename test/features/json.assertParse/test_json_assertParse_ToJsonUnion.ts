import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_assertParse_ToJsonUnion = _test_json_assertParse(
    "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) =>
    typia.json.assertParse<ToJsonUnion>(input),
);
