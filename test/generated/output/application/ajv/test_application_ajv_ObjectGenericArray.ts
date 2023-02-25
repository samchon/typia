import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_ObjectGenericArray = _test_application("ajv")("ObjectGenericArray", typia.application<[
    ObjectGenericArray
], "ajv">());
