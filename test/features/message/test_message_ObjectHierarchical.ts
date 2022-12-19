import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectHierarchical = _test_message(
    "ObjectHierarchical",
    typia.message<ObjectHierarchical>(),
    `syntax = \"proto3\";

message ObjectHierarchical {
    message ICustomer {
        double id = 1;
        ObjectHierarchical.IChannel channel = 2;
        optional ObjectHierarchical.IMember member = 3;
        optional ObjectHierarchical.IAccount account = 4;
        string href = 5;
        string referrer = 6;
        [number, number, number, number] ip = 7;
        ObjectHierarchical.ITimestamp created_at = 8;
    }

    message IChannel {
        double id = 1;
        string code = 2;
        string name = 3;
        double sequence = 4;
        bool exclusive = 5;
        double priority = 6;
        ObjectHierarchical.ITimestamp created_at = 7;
    }

    message ITimestamp {
        double time = 1;
        double zone = 2;
    }

    message IMember {
        double id = 1;
        ObjectHierarchical.IAccount account = 2;
        optional ObjectHierarchical.IEnterprise enterprise = 3;
        repeated string emails = 4;
        ObjectHierarchical.ITimestamp created_at = 5;
        bool authorized = 6;
    }

    message IAccount {
        double id = 1;
        string code = 2;
        ObjectHierarchical.ITimestamp created_at = 3;
    }

    message IEnterprise {
        double id = 1;
        ObjectHierarchical.IAccount account = 2;
        string name = 3;
        double grade = 4;
        ObjectHierarchical.ITimestamp created_at = 5;
    }
}

message _alt_number_comma__space_number_comma__space_number_comma__space_number_agt_ {
    double v0 = 1;
    double v1 = 2;
    double v2 = 3;
    double v3 = 4;
}`
);