import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectUnionComposite = _test_validateClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.validateClone(input),
    ObjectUnionComposite.SPOILERS,
);
