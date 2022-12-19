import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionComposite = _test_message(
    "ObjectUnionComposite",
    typia.message<ObjectUnionComposite>(),
    `syntax = \"proto3\";

message ObjectUnionComposite {
    message IPoint {
        double x = 1;
        double y = 2;
    }

    message ILine {
        ObjectUnionComposite.IPoint p1 = 1;
        ObjectUnionComposite.IPoint p2 = 2;
    }

    message ITriangle {
        ObjectUnionComposite.IPoint p1 = 1;
        ObjectUnionComposite.IPoint p2 = 2;
        ObjectUnionComposite.IPoint p3 = 3;
    }

    message IRectangle {
        ObjectUnionComposite.IPoint p1 = 1;
        ObjectUnionComposite.IPoint p2 = 2;
        ObjectUnionComposite.IPoint p3 = 3;
        ObjectUnionComposite.IPoint p4 = 4;
    }

    message IPolyline {
        repeated ObjectUnionComposite.IPoint points = 1;
    }

    message IPolygon {
        ObjectUnionComposite.IPolyline outer = 1;
        repeated ObjectUnionComposite.IPolyline inner = 2;
    }

    message IPointedShape {
        repeated ObjectUnionComposite.IPoint outer = 1;
        ObjectUnionComposite.IPoint inner = 2;
    }

    message ICircle {
        ObjectUnionComposite.IPoint centroid = 1;
        double radius = 2;
    }
}

message __Main {
    repeated Array.Element_lt__lp_ObjectUnionComposite.ICircle_space__or__space_ObjectUnionComposite.ILine_space__or__space_ObjectUnionComposite.IPoint_space__or__space_ObjectUnionComposite.IPointedShape_space__or__space_ObjectUnionComposite.IPolygon_space__or__space_ObjectUnionComposite.IPolyline_space__or__space_ObjectUnionComposite.IRectangle_space__or__space_ObjectUnionComposite.ITriangle_rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_ObjectUnionComposite {
        message ICircle_space__or__space_ObjectUnionComposite {
            message ILine_space__or__space_ObjectUnionComposite {
                message IPoint_space__or__space_ObjectUnionComposite {
                    message IPointedShape_space__or__space_ObjectUnionComposite {
                        message IPolygon_space__or__space_ObjectUnionComposite {
                            message IPolyline_space__or__space_ObjectUnionComposite {
                                message IRectangle_space__or__space_ObjectUnionComposite {
                                    message ITriangle_rp__gt_ {
                                        oneof value {
                                            ObjectUnionComposite.IPoint o0 = 1;
                                            ObjectUnionComposite.ILine o1 = 2;
                                            ObjectUnionComposite.ITriangle o2 = 3;
                                            ObjectUnionComposite.IRectangle o3 = 4;
                                            ObjectUnionComposite.IPolyline o4 = 5;
                                            ObjectUnionComposite.IPolygon o5 = 6;
                                            ObjectUnionComposite.IPointedShape o6 = 7;
                                            ObjectUnionComposite.ICircle o7 = 8;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}`
);