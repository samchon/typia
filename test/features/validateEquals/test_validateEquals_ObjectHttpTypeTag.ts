import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_validateEquals_ObjectHttpTypeTag = _test_validateEquals(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.validateEquals<ObjectHttpTypeTag>(input));
