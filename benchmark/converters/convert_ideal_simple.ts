import { ObjectSimple } from "../../test/structures/ObjectSimple";

export function convert_ideal_simple(obj: ObjectSimple): string {
    const stringify = {
        box: function (elem: ObjectSimple.IBox3D): string {
            return `{
                "scale": ${stringify.point(elem.scale)},
                "position": ${stringify.point(elem.position)},
                "rotate": ${stringify.point(elem.rotate)},
                "pivot": ${stringify.point(elem.pivot)}
            }`;
        },
        point: function (elem: ObjectSimple.IPoint3D): string {
            return `{
                "x": ${elem.x},
                "y": ${elem.y},
                "z": ${elem.z} 
            }`;
        },
    };
    return stringify.box(obj);
}
