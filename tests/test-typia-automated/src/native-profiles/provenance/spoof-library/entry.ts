import { test_native_identity_default_library_spoof } from "../../../composite/test_native_identity_default_library_spoof";
import { executeProfile } from "../../TestNativeProfile";

void executeProfile("provenance-spoof-library", [
  {
    name: "test_native_identity_default_library_spoof",
    task: test_native_identity_default_library_spoof,
  },
]);
