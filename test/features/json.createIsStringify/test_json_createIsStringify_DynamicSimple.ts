import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_isStringify_DynamicSimple =
    _test_json_isStringify<DynamicSimple>(DynamicSimple)(
        typia.json.createIsStringify<DynamicSimple>(),
    );
