import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagLength } from "../../structures/TagLength";

export const test_equals_TagLength = _test_equals(
    "TagLength",
    TagLength.generate,
    typia.createEquals<TagLength>(),
);
