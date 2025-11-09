import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createValidate_ObjectUnionComposite = (): void => _test_validate(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)(typia.createValidate<ObjectUnionComposite>());
