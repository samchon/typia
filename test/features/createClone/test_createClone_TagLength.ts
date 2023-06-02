import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagLength } from "../../structures/TagLength";

export const test_createClone_TagLength = _test_clone(
    "TagLength",
    TagLength.generate,
    typia.createClone<TagLength>(),
);
