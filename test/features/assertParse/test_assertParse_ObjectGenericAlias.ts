import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertParse<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
