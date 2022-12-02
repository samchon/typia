import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionImplicit = _test_message(
    "ObjectUnionImplicit",
    TSON.message<ObjectUnionImplicit>(),
    `syntax = \"proto3\";

message ObjectUnionImplicit {
    message IPoint {
        double x = 1;
        double y = 2;
        optional double slope = 3;
    }

    message ILine {
        ObjectUnionImplicit.IPoint p1 = 1;
        ObjectUnionImplicit.IPoint p2 = 2;
        optional double width = 3;
        optional double distance = 4;
    }

    message ITriangle {
        ObjectUnionImplicit.IPoint p1 = 1;
        ObjectUnionImplicit.IPoint p2 = 2;
        ObjectUnionImplicit.IPoint p3 = 3;
        optional double width = 4;
        optional double height = 5;
        optional double area = 6;
    }

    message IRectangle {
        ObjectUnionImplicit.IPoint p1 = 1;
        ObjectUnionImplicit.IPoint p2 = 2;
        ObjectUnionImplicit.IPoint p3 = 3;
        ObjectUnionImplicit.IPoint p4 = 4;
        optional double width = 5;
        optional double height = 6;
        optional double area = 7;
    }

    message IPolyline {
        repeated ObjectUnionImplicit.IPoint points = 1;
        optional double length = 2;
    }

    message IPolygon {
        ObjectUnionImplicit.IPolyline outer = 1;
        optional repeated ObjectUnionImplicit.IPolyline inner = 2;
        optional double area = 3;
    }

    message ICircle {
        optional ObjectUnionImplicit.IPoint centroid = 1;
        double radius = 2;
        optional double area = 3;
    }
}

message __Main {
    repeated Array.Element_lt__lp_ObjectUnionImplicit.ICircle_space__or__space_ObjectUnionImplicit.ILine_space__or__space_ObjectUnionImplicit.IPoint_space__or__space_ObjectUnionImplicit.IPolygon_space__or__space_ObjectUnionImplicit.IPolyline_space__or__space_ObjectUnionImplicit.IRectangle_space__or__space_ObjectUnionImplicit.ITriangle_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_ObjectUnionImplicit {
        message ICircle_space__or__space_ObjectUnionImplicit {
            message ILine_space__or__space_ObjectUnionImplicit {
                message IPoint_space__or__space_ObjectUnionImplicit {
                    message IPolygon_space__or__space_ObjectUnionImplicit {
                        message IPolyline_space__or__space_ObjectUnionImplicit {
                            message IRectangle_space__or__space_ObjectUnionImplicit {
                                message ITriangle_rp__gt_ {
                                    oneof value {
                                        ObjectUnionImplicit.IPoint o0 = 1;
                                        ObjectUnionImplicit.ILine o1 = 2;
                                        ObjectUnionImplicit.ITriangle o2 = 3;
                                        ObjectUnionImplicit.IRectangle o3 = 4;
                                        ObjectUnionImplicit.IPolyline o4 = 5;
                                        ObjectUnionImplicit.IPolygon o5 = 6;
                                        ObjectUnionImplicit.ICircle o6 = 7;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}`,
);
