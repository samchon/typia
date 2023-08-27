import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_stringify_TypeTagPattern = _test_json_stringify(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.json.stringify<TypeTagPattern>(input),
);
