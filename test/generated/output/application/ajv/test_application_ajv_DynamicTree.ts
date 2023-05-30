import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTree } from "../../../../structures/DynamicTree";
export const test_application_ajv_DynamicTree = _test_application("ajv")("DynamicTree", typia.application<[
    DynamicTree
], "ajv">());
