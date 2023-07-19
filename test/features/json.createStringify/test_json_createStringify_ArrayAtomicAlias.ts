import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_stringify_ArrayAtomicAlias =
    _test_json_stringify<ArrayAtomicAlias>(ArrayAtomicAlias)(
        typia.json.createStringify<ArrayAtomicAlias>(),
    );
