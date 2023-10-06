import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_validateStringify_NativeUnion = _test_json_validateStringify(
    "NativeUnion",
)<NativeUnion>(
    NativeUnion
)((input) => typia.json.validateStringify<NativeUnion>(input));
