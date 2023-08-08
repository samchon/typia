import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_json_assertParse_TagMatrix = _test_json_assertParse(
    "TagMatrix",
    TagMatrix.generate,
    typia.json.createAssertParse<TagMatrix>(),
    TagMatrix.SPOILERS,
);
