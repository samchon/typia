import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_isParse_TagAtomicUnion = _test_json_isParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.json.createIsParse<TagAtomicUnion>(),
    TagAtomicUnion.SPOILERS,
);
