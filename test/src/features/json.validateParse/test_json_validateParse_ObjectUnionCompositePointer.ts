import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_validateParse_ObjectUnionCompositePointer = (): void => _test_json_validateParse(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)((input) => typia.json.validateParse<ObjectUnionCompositePointer>(input));
