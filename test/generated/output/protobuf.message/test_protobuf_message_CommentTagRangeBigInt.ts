import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_protobuf_message_CommentTagRangeBigInt =
    _test_protobuf_message("CommentTagRangeBigInt")(
        'syntax = "proto3";\n\nmessage CommentTagRangeBigInt {\n    repeated CommentTagRangeBigInt.Type value = 1;\n    message Type {\n        required int64 greater = 1;\n        required int64 greater_equal = 2;\n        required int64 less = 3;\n        required int64 less_equal = 4;\n        required int64 greater_less = 5;\n        required int64 greater_equal_less = 6;\n        required int64 greater_less_equal = 7;\n        required int64 greater_equal_less_equal = 8;\n        required int64 equal = 9;\n    }\n}',
    );
