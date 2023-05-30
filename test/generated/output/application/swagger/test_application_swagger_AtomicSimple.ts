import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";
export const test_application_swagger_AtomicSimple = _test_application("swagger")("AtomicSimple", typia.application<[
    AtomicSimple
], "swagger">());
