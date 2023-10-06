import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_isParse_TypeTagType = _test_json_isParse(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.json.isParse<TypeTagType>(input));
