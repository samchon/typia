import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_assertStringify_DynamicComposite =
    _test_json_assertStringify<DynamicComposite>(DynamicComposite)(
        typia.json.createAssertStringify<DynamicComposite>(),
    );
