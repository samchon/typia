import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";
export const test_application_ajv_ObjectUnionComposite = _test_application("ajv")("ObjectUnionComposite", typia.application<[
    ObjectUnionComposite
], "ajv">());
