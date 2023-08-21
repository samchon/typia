import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_assertParse_DynamicUnion = _test_json_assertParse(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.json.createAssertParse<DynamicUnion>());
