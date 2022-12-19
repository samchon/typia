import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_message } from "../internal/_test_message";

export const test_message_TupleHierarchical = _test_message(
    "TupleHierarchical",
    typia.message<TupleHierarchical>(),
    `syntax = \"proto3\";

message __Main {
    [boolean, null, number, [boolean, null, [number, [boolean, string]]], [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>]] value = 1;
}

message _alt_boolean_comma__space_null_comma__space_number_comma__space__alt_boolean_comma__space_null_comma__space__alt_number_comma__space__alt_boolean_comma__space_string_agt__agt__agt__comma__space__alt_number_comma__space_Array_lt__alt_string_comma__space_boolean_comma__space_Array_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt__agt__gt__agt__agt_ {
    bool v0 = 1;
    oneof v1 {

    }
    double v2 = 2;
    [boolean, null, [number, [boolean, string]]] v3 = 3;
    [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>] v4 = 4;
}

message _alt_boolean_comma__space_null_comma__space__alt_number_comma__space__alt_boolean_comma__space_string_agt__agt__agt_ {
    bool v0 = 1;
    oneof v1 {

    }
    [number, [boolean, string]] v2 = 2;
}

message _alt_number_comma__space__alt_boolean_comma__space_string_agt__agt_ {
    double v0 = 1;
    [boolean, string] v1 = 2;
}

message _alt_boolean_comma__space_string_agt_ {
    bool v0 = 1;
    string v1 = 2;
}

message _alt_number_comma__space_Array_lt__alt_string_comma__space_boolean_comma__space_Array_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt__agt__gt__agt_ {
    double v0 = 1;
    repeated Array.Element_lt__alt_string_comma__space_boolean_comma__space_Array_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt__agt__gt_ v1 = 2;
}

message Array {
    message Element_lt__alt_string_comma__space_boolean_comma__space_Array_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt__agt__gt_ {
        [string, boolean, Array<[number, number, [boolean, string]]>] value = 1;
    }

    message Element_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt_ {
        [number, number, [boolean, string]] value = 1;
    }
}

message _alt_string_comma__space_boolean_comma__space_Array_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt__agt_ {
    string v0 = 1;
    bool v1 = 2;
    repeated Array.Element_lt__alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt__gt_ v2 = 3;
}

message _alt_number_comma__space_number_comma__space__alt_boolean_comma__space_string_agt__agt_ {
    double v0 = 1;
    double v1 = 2;
    [boolean, string] v2 = 3;
}`
);