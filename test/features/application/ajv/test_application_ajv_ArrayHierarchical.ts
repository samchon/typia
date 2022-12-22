import typia from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayHierarchical = _test_application("ajv")(
    "ArrayHierarchical",
    typia.application<[ArrayHierarchical], "ajv">(),
);
