import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_isParse_DynamicNever = _test_json_isParse(
    "DynamicNever",
    DynamicNever.generate,
    typia.json.createIsParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
