import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_is_TagMatrix = _test_is<TagMatrix>(TagMatrix)(
    typia.createIs<TagMatrix>(),
);
