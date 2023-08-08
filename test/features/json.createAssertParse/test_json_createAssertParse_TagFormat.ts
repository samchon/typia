import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_assertParse_TagFormat = _test_json_assertParse(
    "TagFormat",
    TagFormat.generate,
    typia.json.createAssertParse<TagFormat>(),
    TagFormat.SPOILERS,
);
