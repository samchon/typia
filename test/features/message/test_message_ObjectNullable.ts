import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectNullable = _test_message(
    "ObjectNullable",
    typia.message<ObjectNullable>(),
    `syntax = \"proto3\";

message ObjectNullable {
    message IProduct {
        string name = 1;
        ObjectNullable.IManufacturer manufacturer = 2;
        optional ObjectNullable.IBrand brand = 3;
        oneof similar {
            ObjectNullable.IManufacturer o0 = 4;
            ObjectNullable.IBrand o1 = 5;
        }
    }

    message IManufacturer {
        string type = 1;
        string name = 2;
    }

    message IBrand {
        string type = 1;
        string name = 2;
    }
}

message __Main {
    [ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct] value = 1;
}

message _alt_ObjectNullable {
    message IProduct_comma__space_ObjectNullable {
        message IProduct_comma__space_ObjectNullable {
            message IProduct_agt_ {
                ObjectNullable.IProduct v0 = 1;
                ObjectNullable.IProduct v1 = 2;
                ObjectNullable.IProduct v2 = 3;
            }
        }
    }
}`
);