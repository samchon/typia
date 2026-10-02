import { test_native_identity_node_buffer_spoof } from "../../../composite/test_native_identity_node_buffer_spoof";
import { executeProfile } from "../../TestNativeProfile";

void executeProfile("provenance-spoof-node", [
  {
    name: "test_native_identity_node_buffer_spoof",
    task: test_native_identity_node_buffer_spoof,
  },
]);
