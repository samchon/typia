import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_validateStringify_TypeTagAtomicUnion = _test_json_validateStringify(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(
    TypeTagAtomicUnion
)((input) => typia.json.validateStringify<TypeTagAtomicUnion>(input));
