import typia from "../../../../src";
import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_swagger_AtomicClass = _test_json_application(
    "swagger",
)("AtomicClass")(typia.json.application<[AtomicClass], "swagger">());
