import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_isParse_DynamicTree = _test_json_isParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.json.isParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);
