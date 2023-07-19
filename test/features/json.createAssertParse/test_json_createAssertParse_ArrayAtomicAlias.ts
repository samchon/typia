import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_assertParse_ArrayAtomicAlias =
    _test_json_assertParse<ArrayAtomicAlias>(ArrayAtomicAlias)(
        typia.json.createAssertParse<ArrayAtomicAlias>(),
    );
