import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createIsParse_TypeTagLength = _test_json_isParse(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.json.createIsParse<TypeTagLength>());
