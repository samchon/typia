import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_isStringify_ArrayUnion = _test_json_isStringify(
    "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input) => typia.json.isStringify<ArrayUnion>(input));
