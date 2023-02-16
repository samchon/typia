import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isClone(input),
    ObjectUnionComposite.SPOILERS,
);
