import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_protobuf_message_ObjectHierarchical = _test_protobuf_message(
    "ObjectHierarchical",
)(
    'syntax = "proto3";\n\nmessage ObjectHierarchical {\n    message ICustomer {\n        double id = 1;\n        ObjectHierarchical.IChannel channel = 2;\n        optional ObjectHierarchical.IMember member = 3;\n        optional ObjectHierarchical.IAccount account = 4;\n        string href = 5;\n        string referrer = 6;\n        string ip = 7;\n        ObjectHierarchical.ITimestamp created_at = 8;\n    }\n\n    message IChannel {\n        double id = 1;\n        string code = 2;\n        string name = 3;\n        double sequence = 4;\n        bool exclusive = 5;\n        double priority = 6;\n        ObjectHierarchical.ITimestamp created_at = 7;\n    }\n\n    message ITimestamp {\n        double time = 1;\n        double zone = 2;\n    }\n\n    message IMember {\n        double id = 1;\n        ObjectHierarchical.IAccount account = 2;\n        optional ObjectHierarchical.IEnterprise enterprise = 3;\n        repeated string emails = 4;\n        ObjectHierarchical.ITimestamp created_at = 5;\n        bool authorized = 6;\n    }\n\n    message IAccount {\n        double id = 1;\n        string code = 2;\n        ObjectHierarchical.ITimestamp created_at = 3;\n    }\n\n    message IEnterprise {\n        double id = 1;\n        ObjectHierarchical.IAccount account = 2;\n        string name = 3;\n        double grade = 4;\n        ObjectHierarchical.ITimestamp created_at = 5;\n    }\n}',
);
