import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createIsClone<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
