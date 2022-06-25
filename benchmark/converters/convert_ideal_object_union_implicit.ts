import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";

export function convert_ideal_object_union_implicit(
    array: ObjectUnionImplicit,
): string {
    function point(elem: ObjectUnionImplicit.IPoint): string {
        return `{
            "x": ${elem.x}, 
            "y": ${elem.y}
        }`;
    }
    function line(elem: ObjectUnionImplicit.ILine): string {
        return `{
            "p1": ${point(elem.p1)},
            "p2": ${point(elem.p2)}
        }`;
    }
    function triangle(elem: ObjectUnionImplicit.ITriangle): string {
        return `{
            "p1": ${point(elem.p1)},
            "p2": ${point(elem.p2)},
            "p3": ${point(elem.p3)}
        }`;
    }
    function rentagle(elem: ObjectUnionImplicit.IRectangle): string {
        return `{
            "p1": ${point(elem.p1)},
            "p2": ${point(elem.p2)},
            "p3": ${point(elem.p3)},
            "p4": ${point(elem.p4)}
        }`;
    }
    function circle(elem: ObjectUnionImplicit.ICircle, type?: string): string {
        return `{
            "centroid": ${point(elem.centroid)},
            "radius": ${elem.radius}
        }`;
    }
    function polyline(elem: ObjectUnionImplicit.IPolyline): string {
        return `{
            "points": [${elem.points.map((p) => point(p)).join(", ")}]
        }`;
    }
    function polygon(elem: ObjectUnionImplicit.IPolygon): string {
        return `{
            "outer": ${polyline(elem.outer)},
            "inner": [${elem.inner.map((p) => polyline(p)).join(", ")}]
        }`;
    }
    return (
        "[" +
        array
            .map((elem: any) => {
                if (elem.x !== undefined) return point(elem);
                if (elem.p4 !== undefined) return rentagle(elem);
                if (elem.p3 !== undefined) return triangle(elem);
                if (elem.p2 !== undefined) return line(elem);
                if (elem.centroid !== undefined) return circle(elem);
                if (elem.points !== undefined) return polyline(elem);
                return polygon(elem);
            })
            .join(",") +
        "]"
    );
}
