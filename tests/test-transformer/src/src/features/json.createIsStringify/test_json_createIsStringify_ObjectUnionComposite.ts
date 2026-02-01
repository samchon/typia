import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_createIsStringify_ObjectUnionComposite = (): void => _test_json_isStringify(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)(typia.json.createIsStringify<ObjectUnionComposite>());
