import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createStringify_UltimateUnion = _test_json_stringify(
    "UltimateUnion",
)<UltimateUnion>(UltimateUnion)(typia.json.createStringify<UltimateUnion>());
