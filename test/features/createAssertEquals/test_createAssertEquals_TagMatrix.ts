import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagMatrix = _test_assertEquals(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertEquals<TagMatrix>(),
);
