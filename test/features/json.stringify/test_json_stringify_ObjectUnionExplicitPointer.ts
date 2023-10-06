import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_stringify_ObjectUnionExplicitPointer = _test_json_stringify(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)((input) => typia.json.stringify<ObjectUnionExplicitPointer>(input));
