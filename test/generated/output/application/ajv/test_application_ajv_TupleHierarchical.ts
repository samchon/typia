import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";
export const test_application_ajv_TupleHierarchical = _test_application("ajv")("TupleHierarchical", typia.application<[
    TupleHierarchical
], "ajv">());
