import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_validateParse_DynamicComposite =
    _test_json_validateParse<DynamicComposite>(DynamicComposite)((input) =>
        typia.json.validateParse<DynamicComposite>(input),
    );
