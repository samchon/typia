import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_isParse_DynamicComposite = _test_json_isParse(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.json.isParse<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
