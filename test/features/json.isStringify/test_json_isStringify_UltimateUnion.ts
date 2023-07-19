import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_isStringify_UltimateUnion =
    _test_json_isStringify<UltimateUnion>(UltimateUnion)((input) =>
        typia.json.isStringify(input),
    );
