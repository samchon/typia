import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_isParse_DynamicUnion = _test_json_isParse<DynamicUnion>(
    DynamicUnion,
)(typia.json.createIsParse<DynamicUnion>());
