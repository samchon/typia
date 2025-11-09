import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_validateParse_ObjectUnionComposite = (): void => _test_json_validateParse(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((input) => typia.json.validateParse<ObjectUnionComposite>(input));
