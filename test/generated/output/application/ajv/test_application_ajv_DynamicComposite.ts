import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";
export const test_application_ajv_DynamicComposite = _test_application("ajv")("DynamicComposite", typia.application<[
    DynamicComposite
], "ajv">());
