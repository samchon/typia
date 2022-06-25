import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

export function convert_ideal_object_union_explicit(
    obj: ObjectUnionExplicit,
): string {
    function point(elem: ObjectUnionExplicit.IPoint, type?: string): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "x": ${elem.x}, 
            "y": ${elem.y}
        }`;
    }
    function line(elem: ObjectUnionExplicit.ILine, type?: string): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "p1": ${point(elem.p1)},
            "p2": ${point(elem.p2)}
        }`;
    }
    function triangle(
        elem: ObjectUnionExplicit.ITriangle,
        type?: string,
    ): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "p1": ${point(elem.p1)},
            "p2": ${point(elem.p2)},
            "p3": ${point(elem.p3)}
        }`;
    }
    function rentagle(
        elem: ObjectUnionExplicit.IRectangle,
        type?: string,
    ): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "p1": ${point(elem.p1)},
            "p2": ${point(elem.p2)},
            "p3": ${point(elem.p3)},
            "p4": ${point(elem.p4)}
        }`;
    }
    function circle(elem: ObjectUnionExplicit.ICircle, type?: string): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "centroid": ${point(elem.centroid)},
            "radius": ${elem.radius}
        }`;
    }
    function polyline(
        elem: ObjectUnionExplicit.IPolyline,
        type?: string,
    ): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "points": [${elem.points.map((p) => point(p)).join(", ")}]
        }`;
    }
    function polygon(
        elem: ObjectUnionExplicit.IPolygon,
        type?: string,
    ): string {
        return `{
            ${type ? `"type": "${type}",` : ""}
            "outer": ${polyline(elem.outer)},
            "inner": [${elem.inner.map((p) => polyline(p)).join(", ")}]
        }`;
    }
    return `[${obj
        .map((elem) => {
            if (elem.type === "point") return point(elem);
            if (elem.type === "line") return line(elem);
            if (elem.type === "triangle") return triangle(elem);
            if (elem.type === "rectangle") return rentagle(elem);
            if (elem.type === "circle") return circle(elem);
            if (elem.type === "polyline") return polyline(elem);
            if (elem.type === "polygon") return polygon(elem);
            throw new Error(`Unknown type`);
        })
        .join(", ")}]`;
}
