import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayRecursiveUnionExplicit = _test_message(
    "ArrayRecursiveUnionExplicit",
    TSON.message<ArrayRecursiveUnionExplicit>(),
    `syntax = \"proto3\";

message ArrayRecursiveUnionExplicit {
    message IDirectory {
        double id = 1;
        string name = 2;
        string path = 3;
        repeated Array.Element_lt__lp_ArrayRecursiveUnionExplicit.IDirectory_space__or__space_ArrayRecursiveUnionExplicit.IImageFile_space__or__space_ArrayRecursiveUnionExplicit.IShortcut_space__or__space_ArrayRecursiveUnionExplicit.ITextFile_space__or__space_ArrayRecursiveUnionExplicit.IZipFile_rp__gt_ children = 4;
        string type = 5;
    }

    message IImageFile {
        double id = 1;
        string name = 2;
        string path = 3;
        double width = 4;
        double height = 5;
        string url = 6;
        double size = 7;
        string type = 8;
        string extension = 9;
    }

    message ITextFile {
        double id = 1;
        string name = 2;
        string path = 3;
        double size = 4;
        string content = 5;
        string type = 6;
        string extension = 7;
    }

    message IZipFile {
        double id = 1;
        string name = 2;
        string path = 3;
        double size = 4;
        double count = 5;
        string type = 6;
        string extension = 7;
    }

    message IShortcut {
        double id = 1;
        string name = 2;
        string path = 3;
        oneof target {
            ArrayRecursiveUnionExplicit.IDirectory o0 = 4;
            ArrayRecursiveUnionExplicit.IImageFile o1 = 5;
            ArrayRecursiveUnionExplicit.ITextFile o2 = 6;
            ArrayRecursiveUnionExplicit.IZipFile o3 = 7;
            ArrayRecursiveUnionExplicit.IShortcut o4 = 8;
        }
        string type = 9;
        string extension = 10;
    }
}

message Array {
    message Element_lt__lp_ArrayRecursiveUnionExplicit {
        message IDirectory_space__or__space_ArrayRecursiveUnionExplicit {
            message IImageFile_space__or__space_ArrayRecursiveUnionExplicit {
                message IShortcut_space__or__space_ArrayRecursiveUnionExplicit {
                    message ITextFile_space__or__space_ArrayRecursiveUnionExplicit {
                        message IZipFile_rp__gt_ {
                            oneof value {
                                ArrayRecursiveUnionExplicit.IDirectory o0 = 1;
                                ArrayRecursiveUnionExplicit.IImageFile o1 = 2;
                                ArrayRecursiveUnionExplicit.ITextFile o2 = 3;
                                ArrayRecursiveUnionExplicit.IZipFile o3 = 4;
                                ArrayRecursiveUnionExplicit.IShortcut o4 = 5;
                            }
                        }
                    }
                }
            }
        }
    }
}

message __Main {
    repeated Array.Element_lt__lp_ArrayRecursiveUnionExplicit.IDirectory_space__or__space_ArrayRecursiveUnionExplicit.IImageFile_space__or__space_ArrayRecursiveUnionExplicit.IShortcut_space__or__space_ArrayRecursiveUnionExplicit.ITextFile_space__or__space_ArrayRecursiveUnionExplicit.IZipFile_rp__gt_ value = 1;
}`,
);
