import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_assertStringify_NativeAlias =
    _test_json_assertStringify<NativeAlias>(NativeAlias)(
        typia.json.createAssertStringify<NativeAlias>(),
    );
