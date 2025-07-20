import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_validateStringify_ObjectUnionComposite = (): void =>
  _test_json_validateStringify("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input) => typia.json.validateStringify<ObjectUnionComposite>(input));
