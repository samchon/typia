import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_is_ObjectHttpTypeTag = (): void => _test_is(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.is<ObjectHttpTypeTag>(input));
