import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createStringify_TagMatrix = _test_stringify(
    "TagMatrix",
    TagMatrix.generate,
    typia.createStringify<TagMatrix>(),
);
