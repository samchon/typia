import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayHierarchical = _test_message(
    "ArrayHierarchical",
    TSON.message<ArrayHierarchical>(),
    `syntax = \"proto3\";

message ArrayHierarchical {
    message ICompany {
        double id = 1;
        double serial = 2;
        string name = 3;
        ArrayHierarchical.ITimestamp established_at = 4;
        repeated ArrayHierarchical.IDepartment departments = 5;
    }

    message ITimestamp {
        double time = 1;
        double zone = 2;
    }

    message IDepartment {
        double id = 1;
        string code = 2;
        double sales = 3;
        ArrayHierarchical.ITimestamp created_at = 4;
        repeated ArrayHierarchical.IEmployee employees = 5;
    }

    message IEmployee {
        double id = 1;
        string name = 2;
        double age = 3;
        double grade = 4;
        ArrayHierarchical.ITimestamp employeed_at = 5;
    }
}

message __Main {
    repeated ArrayHierarchical.ICompany value = 1;
}`,
);
