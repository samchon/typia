import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_protobuf_message_TupleRestObject = _test_protobuf_message(
    "TupleRestObject",
)(
    'syntax = "proto3";\n\nmessage TupleRestObject {\n    message IObject {\n        string value = 1;\n    }\n}\n\nmessage __Main {\n    _alt_boolean_comma__space_number_comma__space_...TupleRestObject.IObject_agt_ value = 1;\n}\n\nmessage _alt_boolean_comma__space_number_comma__space_ {\n    message  {\n        message  {\n            message TupleRestObject {\n                message IObject_agt_ {\n                    bool v0 = 1;\n                    double v1 = 2;\n                    repeated TupleRestObject.IObject v2 = 3;\n                }\n            }\n        }\n    }\n}',
);
