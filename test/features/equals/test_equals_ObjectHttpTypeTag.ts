import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_equals_ObjectHttpTypeTag = _test_equals(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.equals<ObjectHttpTypeTag>(input));
