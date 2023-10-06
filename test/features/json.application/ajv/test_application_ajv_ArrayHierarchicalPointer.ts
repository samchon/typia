import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_application_ajv_ArrayHierarchicalPointer =
    _test_json_application("ajv")("ArrayHierarchicalPointer")(
        typia.json.application<[ArrayHierarchicalPointer], "ajv">(),
    );
