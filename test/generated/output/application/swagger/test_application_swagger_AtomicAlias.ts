import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { AtomicAlias } from "../../../../structures/AtomicAlias";
export const test_application_swagger_AtomicAlias = _test_application("swagger")("AtomicAlias", typia.application<[
    AtomicAlias
], "swagger">());
