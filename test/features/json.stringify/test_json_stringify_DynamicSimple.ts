import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_stringify_DynamicSimple = _test_json_stringify(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) =>
    typia.json.stringify<DynamicSimple>(input),
);
