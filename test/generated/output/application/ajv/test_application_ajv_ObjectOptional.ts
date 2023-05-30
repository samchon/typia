import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectOptional } from "../../../../structures/ObjectOptional";
export const test_application_ajv_ObjectOptional = _test_application("ajv")("ObjectOptional", typia.application<[
    ObjectOptional
], "ajv">());
