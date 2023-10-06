import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_createStringify_NativeAlias = _test_json_stringify(
    "NativeAlias",
)<NativeAlias>(
    NativeAlias
)(typia.json.createStringify<NativeAlias>());
