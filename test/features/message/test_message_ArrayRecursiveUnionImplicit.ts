import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayRecursiveUnionImplicit = _test_message(
    "ArrayRecursiveUnionImplicit",
    typia.message<ArrayRecursiveUnionImplicit>(),
    `syntax = \"proto3\";

message ArrayRecursiveUnionImplicit {
    message IDirectory {
        double id = 1;
        string name = 2;
        string path = 3;
        repeated Array.Element_lt__lp_ArrayRecursiveUnionImplicit.IDirectory_space__or__space_ArrayRecursiveUnionImplicit.IImageFile_space__or__space_ArrayRecursiveUnionImplicit.ISharedDirectory_space__or__space_ArrayRecursiveUnionImplicit.IShortcut_space__or__space_ArrayRecursiveUnionImplicit.ITextFile_space__or__space_ArrayRecursiveUnionImplicit.IZipFile_rp__gt_ children = 4;
    }

    message ISharedDirectory {
        string access = 1;
        double id = 2;
        string name = 3;
        string path = 4;
        repeated Array.Element_lt__lp_ArrayRecursiveUnionImplicit.IDirectory_space__or__space_ArrayRecursiveUnionImplicit.IImageFile_space__or__space_ArrayRecursiveUnionImplicit.ISharedDirectory_space__or__space_ArrayRecursiveUnionImplicit.IShortcut_space__or__space_ArrayRecursiveUnionImplicit.ITextFile_space__or__space_ArrayRecursiveUnionImplicit.IZipFile_rp__gt_ children = 5;
    }

    message IImageFile {
        double id = 1;
        string name = 2;
        string path = 3;
        double width = 4;
        double height = 5;
        string url = 6;
        double size = 7;
    }

    message ITextFile {
        double id = 1;
        string name = 2;
        string path = 3;
        double size = 4;
        string content = 5;
    }

    message IZipFile {
        double id = 1;
        string name = 2;
        string path = 3;
        double size = 4;
        double count = 5;
    }

    message IShortcut {
        double id = 1;
        string name = 2;
        string path = 3;
        oneof target {
            ArrayRecursiveUnionImplicit.IDirectory o0 = 4;
            ArrayRecursiveUnionImplicit.ISharedDirectory o1 = 5;
            ArrayRecursiveUnionImplicit.IImageFile o2 = 6;
            ArrayRecursiveUnionImplicit.ITextFile o3 = 7;
            ArrayRecursiveUnionImplicit.IZipFile o4 = 8;
            ArrayRecursiveUnionImplicit.IShortcut o5 = 9;
        }
    }
}

message Array {
    message Element_lt__lp_ArrayRecursiveUnionImplicit {
        message IDirectory_space__or__space_ArrayRecursiveUnionImplicit {
            message IImageFile_space__or__space_ArrayRecursiveUnionImplicit {
                message ISharedDirectory_space__or__space_ArrayRecursiveUnionImplicit {
                    message IShortcut_space__or__space_ArrayRecursiveUnionImplicit {
                        message ITextFile_space__or__space_ArrayRecursiveUnionImplicit {
                            message IZipFile_rp__gt_ {
                                oneof value {
                                    ArrayRecursiveUnionImplicit.IDirectory o0 = 1;
                                    ArrayRecursiveUnionImplicit.ISharedDirectory o1 = 2;
                                    ArrayRecursiveUnionImplicit.IImageFile o2 = 3;
                                    ArrayRecursiveUnionImplicit.ITextFile o3 = 4;
                                    ArrayRecursiveUnionImplicit.IZipFile o4 = 5;
                                    ArrayRecursiveUnionImplicit.IShortcut o5 = 6;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

message __Main {
    repeated Array.Element_lt__lp_ArrayRecursiveUnionImplicit.IDirectory_space__or__space_ArrayRecursiveUnionImplicit.IImageFile_space__or__space_ArrayRecursiveUnionImplicit.ISharedDirectory_space__or__space_ArrayRecursiveUnionImplicit.IShortcut_space__or__space_ArrayRecursiveUnionImplicit.ITextFile_space__or__space_ArrayRecursiveUnionImplicit.IZipFile_rp__gt_ value = 1;
}`
);