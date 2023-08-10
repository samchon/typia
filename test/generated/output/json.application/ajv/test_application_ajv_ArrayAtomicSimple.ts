import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../../structures/ArrayAtomicSimple";

export const test_json_application_ajv_ArrayAtomicSimple =
    _test_json_application("ajv")("ArrayAtomicSimple")(
        typia.json.application<[ArrayAtomicSimple], "ajv">(),
    );
