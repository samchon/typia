import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_json_validateStringify_TagAtomicUnion =
    _test_json_validateStringify("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )(typia.json.createValidateStringify<TagAtomicUnion>());
