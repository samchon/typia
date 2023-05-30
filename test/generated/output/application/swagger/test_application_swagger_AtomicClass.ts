import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicClass } from "../../../../structures/AtomicClass";
export const test_application_swagger_AtomicClass = _test_application("swagger")("AtomicClass", typia.application<[
    AtomicClass
], "swagger">());
