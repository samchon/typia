import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_validateParse_NativeAlias = _test_json_validateParse(
    "NativeAlias",
)<NativeAlias>(NativeAlias)((input) =>
    typia.json.validateParse<NativeAlias>(input),
);
