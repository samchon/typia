import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_validateStringify_UltimateUnion =
    _test_json_validateStringify<UltimateUnion>(UltimateUnion)((input) =>
        typia.json.validateStringify(input),
    );
