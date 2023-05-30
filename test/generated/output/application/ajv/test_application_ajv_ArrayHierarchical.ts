import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";
export const test_application_ajv_ArrayHierarchical = _test_application("ajv")("ArrayHierarchical", typia.application<[
    ArrayHierarchical
], "ajv">());
