import typia from "typia";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_ObjectHierarchical = _test_application("ajv")("ObjectHierarchical", typia.application<[
    ObjectHierarchical
], "ajv">());
