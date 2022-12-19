import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGenericArray = _test_message(
    "ObjectGenericArray",
    typia.message<ObjectGenericArray>(),
    `syntax = \"proto3\";

message ObjectGenericArray {
    ObjectGenericArray.IPagination pagination = 1;
    repeated ObjectGenericArray.IPerson data = 2;


    message IPagination {
        double page = 1;
        double limit = 2;
        double total_count = 3;
        double total_pages = 4;
    }

    message IPerson {
        string name = 1;
        double age = 2;
    }
}`
);