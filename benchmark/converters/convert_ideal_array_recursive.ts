import { $number } from "../../src/functional/$number";
import { $string } from "../../src/functional/$string";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export function convert_ideal_array_recursive(obj: ArrayRecursive): string {
    function timestamp(elem: ArrayRecursive.ITimestamp): string {
        return `{
            "time": ${$number(elem.time)},
            "zone": ${$number(elem.zone)}
        }`;
    }
    function category(elem: ArrayRecursive.ICategory): string {
        return `{
            "id": ${$number(elem.id)},
            "code": ${$string(elem.code)},
            "sequence": ${$number(elem.sequence)},
            "created_at": ${timestamp(elem.created_at)},
            "children": [${elem.children
                .map((child) => category(child))
                .join(",\n")}
            ]
        }`;
    }
    return category(obj);
}
