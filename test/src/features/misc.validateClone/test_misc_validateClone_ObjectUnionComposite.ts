import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_validateClone_ObjectUnionComposite = (): void => _test_misc_validateClone(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((input) => typia.misc.validateClone<ObjectUnionComposite>(input));
