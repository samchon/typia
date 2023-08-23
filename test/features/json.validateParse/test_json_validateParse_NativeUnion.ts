import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_validateParse_NativeUnion = _test_json_validateParse(
    "NativeUnion",
)<NativeUnion>(NativeUnion)((input) =>
    typia.json.validateParse<NativeUnion>(input),
);
