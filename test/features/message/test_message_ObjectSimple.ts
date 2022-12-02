import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectSimple = _test_message(
    "ObjectSimple",
    TSON.message<ObjectSimple>(),
    `syntax = \"proto3\";

message ObjectSimple {
    message IBox3D {
        ObjectSimple.IPoint3D scale = 1;
        ObjectSimple.IPoint3D position = 2;
        ObjectSimple.IPoint3D rotate = 3;
        ObjectSimple.IPoint3D pivot = 4;
    }

    message IPoint3D {
        double x = 1;
        double y = 2;
        double z = 3;
    }
}`,
);
