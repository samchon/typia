import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicComposite } from "../../../../structures/DynamicComposite";
export const test_application_swagger_DynamicComposite = _test_application("swagger")("DynamicComposite", typia.application<[
    DynamicComposite
], "swagger">());
