import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_isStringify_DynamicComposite = _test_json_isStringify(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
    typia.json.isStringify<DynamicComposite>(input),
);
