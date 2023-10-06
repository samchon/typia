import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_isStringify_TypeTagMatrix = _test_json_isStringify(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.json.isStringify<TypeTagMatrix>(input));
