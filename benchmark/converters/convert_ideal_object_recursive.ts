import { $number } from "../../src/functional/$number";
import { $string } from "../../src/functional/$string";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export function convert_ideal_object_recursive(obj: ObjectRecursive): string {
    function department(elem: ObjectRecursive.IDepartment): string {
        return `{
            "parent": ${elem.parent ? department(elem.parent) : "null"},
            "id": ${$number(elem.id)},
            "code": "${$string(elem.code)}",
            "name": "${$string(elem.name)}",
            "sequence": ${$number(elem.sequence)},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function timestamp(elem: ObjectRecursive.ITimestamp): string {
        return `{
            "time": ${$number(elem.time)},
            "zone": ${$number(elem.zone)}
        }`;
    }
    return department(obj);
}
