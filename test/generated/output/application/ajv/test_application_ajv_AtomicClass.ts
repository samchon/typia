import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicClass } from "../../../../structures/AtomicClass";
export const test_application_ajv_AtomicClass = _test_application("ajv")("AtomicClass", typia.application<[
    AtomicClass
], "ajv">());
