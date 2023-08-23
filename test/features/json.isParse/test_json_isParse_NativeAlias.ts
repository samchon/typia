import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_isParse_NativeAlias = _test_json_isParse(
    "NativeAlias",
)<NativeAlias>(NativeAlias)((input) => typia.json.isParse<NativeAlias>(input));
