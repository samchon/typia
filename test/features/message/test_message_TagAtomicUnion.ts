import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_TagAtomicUnion = _test_message(
    "TagAtomicUnion",
    typia.message<TagAtomicUnion>(),
    `syntax = \"proto3\";

message TagAtomicUnion {
    message Type {
        oneof value {
            string o0 = 1;
            double o1 = 2;
        }
    }
}

message __Main {
    repeated TagAtomicUnion.Type value = 1;
}`
);