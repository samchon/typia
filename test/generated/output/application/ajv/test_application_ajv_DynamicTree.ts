import typia from "typia";
import { DynamicTree } from "../../../../structures/DynamicTree";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_DynamicTree = _test_application("ajv")("DynamicTree", typia.application<[
    DynamicTree
], "ajv">());
