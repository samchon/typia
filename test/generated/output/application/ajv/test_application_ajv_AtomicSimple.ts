import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";
export const test_application_ajv_AtomicSimple = _test_application("ajv")("AtomicSimple", typia.application<[
    AtomicSimple
], "ajv">());
