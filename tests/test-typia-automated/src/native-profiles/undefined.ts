import { test_native_json_stringify_contextual_undefined } from "../composite/test_native_json_stringify_contextual_undefined";
import { executeProfile } from "./TestNativeProfile";

executeProfile("undefined-false", [
  {
    name: "test_native_json_stringify_contextual_undefined",
    task: () => test_native_json_stringify_contextual_undefined(true),
  },
]);
