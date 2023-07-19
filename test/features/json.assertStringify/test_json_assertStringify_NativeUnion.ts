import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_assertStringify_NativeUnion =
    _test_json_assertStringify<NativeUnion>(NativeUnion)((input) =>
        typia.json.assertStringify(input),
    );
