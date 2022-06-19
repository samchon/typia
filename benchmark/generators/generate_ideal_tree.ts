import { $string } from "../../src/functional/$string";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export function generate_ideal_tree(obj: ArrayRecursive): string {
    function category(elem: ArrayRecursive.ICategory): string {
        return `{
            "children": [${elem.children
                .map((child) => category(child))
                .join(",")}],
            "id": ${elem.id},
            "code": "${$string(elem.code)}",
            "name": "${$string(elem.name)}",
            "sequence": ${elem.sequence},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function timestamp(elem: ArrayRecursive.ITimestamp): string {
        return `{
            "time": ${elem.time},
            "zone": ${elem.zone}
        }`;
    }
    return `[${obj.map((elem) => category(elem)).join(",")}]`;
}
