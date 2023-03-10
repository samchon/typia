import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_message_ConstantAtomicWrapper = _test_message(
    "ConstantAtomicWrapper",
    'syntax = "proto3";\n\nmessage ConstantAtomicWrapper {\n    message IPointer_lt_boolean_gt_ {\n        bool value = 1;\n    }\n\n    message IPointer_lt_number_gt_ {\n        double value = 1;\n    }\n\n    message IPointer_lt_string_gt_ {\n        string value = 1;\n    }\n}\n\nmessage __Main {\n    _alt_ConstantAtomicWrapper.IPointer_lt_boolean_gt__comma__space_ConstantAtomicWrapper.IPointer_lt_number_gt__comma__space_ConstantAtomicWrapper.IPointer_lt_string_gt__agt_ value = 1;\n}\n\nmessage _alt_ConstantAtomicWrapper {\n    message IPointer_lt_boolean_gt__comma__space_ConstantAtomicWrapper {\n        message IPointer_lt_number_gt__comma__space_ConstantAtomicWrapper {\n            message IPointer_lt_string_gt__agt_ {\n                ConstantAtomicWrapper.IPointer_lt_boolean_gt_ v0 = 1;\n                ConstantAtomicWrapper.IPointer_lt_number_gt_ v1 = 2;\n                ConstantAtomicWrapper.IPointer_lt_string_gt_ v2 = 3;\n            }\n        }\n    }\n}',
);
