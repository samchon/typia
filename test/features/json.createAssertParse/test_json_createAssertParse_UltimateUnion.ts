import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createAssertParse_UltimateUnion = _test_json_assertParse(
    "UltimateUnion",
)<UltimateUnion>(UltimateUnion)(typia.json.createAssertParse<UltimateUnion>());
