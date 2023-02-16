import typia from "typia";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagAtomicUnion =
    _test_validateStringify(
        "TagAtomicUnion",
        TagAtomicUnion.generate,
        typia.createValidateStringify<TagAtomicUnion>(),
        TagAtomicUnion.SPOILERS,
    );
