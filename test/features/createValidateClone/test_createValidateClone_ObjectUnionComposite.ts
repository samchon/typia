import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionComposite = _test_validateClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createValidateClone<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
