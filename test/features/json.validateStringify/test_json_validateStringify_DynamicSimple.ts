import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_validateStringify_DynamicSimple =
    _test_json_validateStringify<DynamicSimple>(DynamicSimple)((input) =>
        typia.json.validateStringify(input),
    );
