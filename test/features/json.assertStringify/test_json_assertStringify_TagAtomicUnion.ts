import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_assertStringify_TagAtomicUnion =
    _test_json_assertStringify("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )((input) => typia.json.assertStringify<TagAtomicUnion>(input));
