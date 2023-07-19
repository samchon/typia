import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_validateParse_ArrayAtomicAlias =
    _test_json_validateParse<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
        typia.json.validateParse<ArrayAtomicAlias>(input),
    );
