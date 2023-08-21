import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_stringify_DynamicUnion = _test_json_stringify(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.json.createStringify<DynamicUnion>());
