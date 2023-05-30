import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";
export const test_application_ajv_ObjectHierarchical = _test_application("ajv")("ObjectHierarchical", typia.application<[
    ObjectHierarchical
], "ajv">());
