import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_stringify_DynamicComposite = _test_json_stringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.json.stringify(input),
);
