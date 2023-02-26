import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createAssertEquals_TagMatrix = _test_assertEquals(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertEquals<TagMatrix>(),
);
