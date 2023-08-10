import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_isStringify_NativeAlias =
    _test_json_isStringify<NativeAlias>(NativeAlias)((input) =>
        typia.json.isStringify<NativeAlias>(input),
    );
