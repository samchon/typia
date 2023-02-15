import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectUnionComposite = _test_assertParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssertParse<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
