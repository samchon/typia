import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_message } from "../internal/_test_message";

export const test_message_ConstantAtomicWrapper = _test_message(
    "ConstantAtomicWrapper",
    typia.message<ConstantAtomicWrapper>(),
    `syntax = \"proto3\";

message ConstantAtomicWrapper {
    message IPointer_lt_boolean_gt_ {
        bool value = 1;
    }

    message IPointer_lt_number_gt_ {
        double value = 1;
    }

    message IPointer_lt_string_gt_ {
        string value = 1;
    }
}

message __Main {
    [ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>] value = 1;
}

message _alt_ConstantAtomicWrapper {
    message IPointer_lt_boolean_gt__comma__space_ConstantAtomicWrapper {
        message IPointer_lt_number_gt__comma__space_ConstantAtomicWrapper {
            message IPointer_lt_string_gt__agt_ {
                ConstantAtomicWrapper.IPointer_lt_boolean_gt_ v0 = 1;
                ConstantAtomicWrapper.IPointer_lt_number_gt_ v1 = 2;
                ConstantAtomicWrapper.IPointer_lt_string_gt_ v2 = 3;
            }
        }
    }
}`
);