import { $string } from "../../src/functional/$string";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export function convert_ideal_array_recursive(obj: ArrayRecursive): string {
    function timestamp(elem: ArrayRecursive.ITimestamp): string {
        return `{
            "time": ${elem.time},
            "zone": ${elem.zone}
        }`;
    }
    function category(elem: ArrayRecursive.ICategory): string {
        return `{
            "id": ${elem.id},
            "code": ${$string(elem.code)},
            "sequence": ${elem.sequence},
            "created_at": ${timestamp(elem.created_at)},
            "children": [${elem.children
                .map((child) => category(child))
                .join(",\n")}
            ]
        }`;
    }
    // function category(elem: ArrayRecursive.ICategory): string {
    //     function head(input: ArrayRecursive.ICategory): string {
    //         return `{
    //             "id": ${input.id},
    //             "code": ${$string(input.code)},
    //             "sequence": ${input.sequence},
    //             "created_at": ${timestamp(input.created_at)},
    //             "children":[`;
    //     }

    //     let content: string = "";
    //     let count: number = 0;

    //     const stack: ArrayRecursive.ICategory[] = [elem];
    //     while (stack.length !== 0) {
    //         const top: ArrayRecursive.ICategory = stack.pop()!;
    //         content += head(top);
    //         ++count;

    //         if (top.children.length !== 0)
    //             stack.push(...top.children.reverse());
    //     }
    //     return content + "}]".repeat(count);
    // }
    return category(obj);
}
