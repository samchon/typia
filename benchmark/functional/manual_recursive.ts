import { $string } from "../../src/functional/$string";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export function manual_recursive(obj: ObjectRecursive): string {
    function department(elem: ObjectRecursive.IDepartment): string {
        return `{
            "parent": ${elem.parent ? department(elem.parent) : "null"},
            "id": ${elem.id},
            "code": "${$string(elem.code)}",
            "name": "${$string(elem.name)}",
            "sequence": ${elem.sequence},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function timestamp(elem: ObjectRecursive.ITimestamp): string {
        return `{
            "time": ${elem.time},
            "zone": ${elem.zone}
        }`;
    }

    return department(obj);
}
