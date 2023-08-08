import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_isParse_UltimateUnion = _test_json_isParse(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.json.createIsParse<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
