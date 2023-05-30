import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicAlias } from "../../../../structures/AtomicAlias";
export const test_application_ajv_AtomicAlias = _test_application("ajv")("AtomicAlias", typia.application<[
    AtomicAlias
], "ajv">());
