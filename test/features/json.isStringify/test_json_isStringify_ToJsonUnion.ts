import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_isStringify_ToJsonUnion =
    _test_json_isStringify<ToJsonUnion>(ToJsonUnion)((input) =>
        typia.json.isStringify<ToJsonUnion>(input),
    );
