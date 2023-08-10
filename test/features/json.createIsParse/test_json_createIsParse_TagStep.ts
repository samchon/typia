import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagStep } from "../../structures/TagStep";

export const test_json_isParse_TagStep = _test_json_isParse<TagStep>(TagStep)(
    typia.json.createIsParse<TagStep>(),
);
