import { $string } from "../../src/functional/$string";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export function convert_ideal_recursive(obj: ObjectRecursive): string {
    // function department(elem: ObjectRecursive.IDepartment): string {
    //     return `{
    //         "parent": ${elem.parent ? department(elem.parent) : "null"},
    //         "id": ${elem.id},
    //         "code": "${$string(elem.code)}",
    //         "name": "${$string(elem.name)}",
    //         "sequence": ${elem.sequence},
    //         "created_at": ${timestamp(elem.created_at)}
    //     }`;
    // }
    // function timestamp(elem: ObjectRecursive.ITimestamp): string {
    //     return `{
    //         "time": ${elem.time},
    //         "zone": ${elem.zone}
    //     }`;
    // }

    // return department(obj);

    function base(input: ObjectRecursive): string {
        return `{
            "id": ${input.id},
            "name": ${$string(input.name)},
            "sequence": ${input.sequence},
            "created_at": ${timestamp(input.created_at)},
            "parent":`;
    }
    function timestamp(elem: ObjectRecursive.ITimestamp): string {
        return `{
            "time": ${elem.time},
            "zone": ${elem.zone}
        }`;
    }

    let content: string = "";
    let current: ObjectRecursive | null = obj;
    let count: number = 0;

    while (current !== null) {
        content += base(current);
        ++count;
        current = current.parent;
    }
    return content + "null" + "}".repeat(count);
}
