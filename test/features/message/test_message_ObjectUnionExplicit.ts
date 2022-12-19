import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionExplicit = _test_message(
    "ObjectUnionExplicit",
    typia.message<ObjectUnionExplicit>(),
    `syntax = \"proto3\";

message ObjectUnionExplicit {
    message Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit {
        message IPoint_gt_ {
            double x = 1;
            double y = 2;
            string type = 3;
        }
    }

    message Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit {
        message ILine_gt_ {
            ObjectUnionExplicit.IPoint p1 = 1;
            ObjectUnionExplicit.IPoint p2 = 2;
            string type = 3;
        }
    }

    message IPoint {
        double x = 1;
        double y = 2;
    }

    message Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit {
        message ITriangle_gt_ {
            ObjectUnionExplicit.IPoint p1 = 1;
            ObjectUnionExplicit.IPoint p2 = 2;
            ObjectUnionExplicit.IPoint p3 = 3;
            string type = 4;
        }
    }

    message Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit {
        message IRectangle_gt_ {
            ObjectUnionExplicit.IPoint p1 = 1;
            ObjectUnionExplicit.IPoint p2 = 2;
            ObjectUnionExplicit.IPoint p3 = 3;
            ObjectUnionExplicit.IPoint p4 = 4;
            string type = 5;
        }
    }

    message Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit {
        message IPolyline_gt_ {
            repeated ObjectUnionExplicit.IPoint points = 1;
            string type = 2;
        }
    }

    message Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit {
        message IPolygon_gt_ {
            ObjectUnionExplicit.IPolyline outer = 1;
            repeated ObjectUnionExplicit.IPolyline inner = 2;
            string type = 3;
        }
    }

    message IPolyline {
        repeated ObjectUnionExplicit.IPoint points = 1;
    }

    message Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit {
        message ICircle_gt_ {
            ObjectUnionExplicit.IPoint centroid = 1;
            double radius = 2;
            string type = 3;
        }
    }
}

message __Main {
    repeated Array.Element_lt__lp_ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt__space__or__space_ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt__space__or__space_ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt__space__or__space_ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt__space__or__space_ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt__space__or__space_ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt__space__or__space_ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt__rp__gt_ value = 1;
}

message Array {
    message Element_lt__lp_ObjectUnionExplicit {
        message Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit {
            message ICircle_gt__space__or__space_ObjectUnionExplicit {
                message Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit {
                    message ILine_gt__space__or__space_ObjectUnionExplicit {
                        message Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit {
                            message IPoint_gt__space__or__space_ObjectUnionExplicit {
                                message Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit {
                                    message IPolygon_gt__space__or__space_ObjectUnionExplicit {
                                        message Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit {
                                            message IPolyline_gt__space__or__space_ObjectUnionExplicit {
                                                message Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit {
                                                    message IRectangle_gt__space__or__space_ObjectUnionExplicit {
                                                        message Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit {
                                                            message ITriangle_gt__rp__gt_ {
                                                                oneof value {
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_ o0 = 1;
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_ o1 = 2;
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_ o2 = 3;
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_ o3 = 4;
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_ o4 = 5;
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_ o5 = 6;
                                                                    ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_ o6 = 7;
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
                        }
                    }
                }
            }
        }
    }
}`
);