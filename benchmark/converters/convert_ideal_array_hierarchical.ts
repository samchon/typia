import { $number } from "../../src/functional/$number";
import { $string } from "../../src/functional/$string";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";

export function convert_ideal_array_hierarchical(
    array: ArrayHierarchical,
): string {
    function company(elem: ArrayHierarchical.ICompany): string {
        return `{
            "id": ${$number(elem.id)},
            "serial": ${$number(elem.serial)},
            "name": ${$string(elem.name)},
            "established_at": ${timestamp(elem.established_at)},
            "departments": [${elem.departments
                .map((elem) => department(elem))
                .join(",")}]
        }`;
    }
    function department(elem: ArrayHierarchical.IDepartment): string {
        return `{
            "id": ${$number(elem.id)},
            "code": ${$string(elem.code)},
            "sales": ${$number(elem.sales)},
            "created_at": ${timestamp(elem.created_at)},
            "employees": [${elem.employees
                .map((elem) => employee(elem))
                .join(",")}]
        }`;
    }
    function employee(elem: ArrayHierarchical.IEmployee): string {
        return `{
            "id": ${$number(elem.id)},
            "name": ${$string(elem.name)},
            "age": ${$number(elem.age)},
            "grade": ${$number(elem.grade)},
            "employeed_at": ${timestamp(elem.employeed_at)}
        }`;
    }
    function timestamp(elem: ArrayHierarchical.ITimestamp): string {
        return `{
            "time": ${$number(elem.time)},
            "zone": ${$number(elem.zone)}
        }`;
    }

    return `[${array.map((elem) => company(elem)).join(",")}]`;
}
