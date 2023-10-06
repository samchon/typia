import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_isParse_TypeTagMatrix = _test_json_isParse(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.json.isParse<TypeTagMatrix>(input));
