import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectAlias = _test_message(
    "ObjectAlias",
    typia.message<ObjectAlias>(),
    `syntax = \"proto3\";

message ObjectAlias {
    message IMember {
        optional string id = 1;
        string email = 2;
        string name = 3;
        oneof sex {
            uint32 o0 = 4;
            string o1 = 5;
        }
        optional double age = 6;
        optional bool dead = 7;
    }
}

message __Main {
    repeated ObjectAlias.IMember value = 1;
}`
);