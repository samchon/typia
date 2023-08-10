import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_assert_TagMatrix = _test_assert<TagMatrix>(TagMatrix)(
    (input) => typia.assert<TagMatrix>(input),
);
