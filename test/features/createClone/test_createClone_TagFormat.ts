import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagFormat } from "../../structures/TagFormat";

export const test_createClone_TagFormat = _test_clone(
    "TagFormat",
    TagFormat.generate,
    typia.createClone<TagFormat>(),
);
