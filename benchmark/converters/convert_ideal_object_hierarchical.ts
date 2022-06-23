import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { $string } from "../../src/functional/$string";

export function convert_ideal_object_hierarchical(obj: ObjectHierarchical): string {
    function customer(elem: ObjectHierarchical.ICustomer): string {
        return `{
            "id": ${elem.id},
            "channel": ${channel(elem.channel)},
            "member": ${elem.member ? member(elem.member) : null},
            "account": ${elem.account ? account(elem.account) : null},
            "href": ${$string(elem.href)},
            "referrer": ${$string(elem.referrer)},
            "ip": [${(elem.ip[0], elem.ip[1], elem.ip[2], elem.ip[3])},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function member(elem: ObjectHierarchical.IMember): string {
        return `{
            "id": ${elem.id},
            "account": ${account(elem.account)},
            "enterprise": ${
                elem.enterprise ? enterprise(elem.enterprise) : null
            },
            "emails": [${elem.emails.map((str) => $string(str)).join(", ")}],
            "created_at": ${timestamp(elem.created_at)},
            "authorized": ${elem.authorized}
        }`;
    }
    function enterprise(elem: ObjectHierarchical.IEnterprise): string {
        return `{
            "id": ${elem.id},
            "account": ${account(elem.account)},
            "name": ${$string(elem.name)},
            "grade": ${elem.grade},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function account(elem: ObjectHierarchical.IAccount): string {
        return `{
            "id": ${elem.id},
            "code": ${$string(elem.code)},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function channel(elem: ObjectHierarchical.IChannel): string {
        return `{
            "id": ${elem.id},
            "code": ${$string(elem.code)},
            "name": ${$string(elem.name)},
            "sequence": ${elem.sequence},
            "exclusive": ${elem.exclusive},
            "priority": ${elem.priority},
            "created_at": ${timestamp(elem.created_at)}
        }`;
    }
    function timestamp(elem: ObjectHierarchical.ITimestamp): string {
        return `{
            "time": ${elem.time},
            "zone": ${elem.zone}
        }`;
    }

    return customer(obj);
}
