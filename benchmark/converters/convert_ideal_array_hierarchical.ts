import { $string } from "../../src/functional/$string";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";

export function convert_ideal_array_hierarchical(
    array: ArrayHierarchical,
): string {
    function company(elem: ArrayHierarchical.ICompany): string {
        return `{
            "id": ${elem.id},
            "serial": [
                ${elem.serial[0]}, 
                ${elem.serial[1]}, 
                ${elem.serial[2]}
            ],
            "name": ${$string(elem.name)},
            "established_at": ${timestamp(elem.established_at)},
            "departments": [${elem.departments
                .map((elem) => department(elem))
                .join(",")}]
        }`;
    }
    function department(elem: ArrayHierarchical.IDepartment): string {
        return `{
            "id": ${elem.id},
            "code": ${$string(elem.code)},
            "sales": ${elem.sales},
            "created_at": ${timestamp(elem.created_at)},
            "employees": [${elem.employees
                .map((elem) => employee(elem))
                .join(",")}]
        }`;
    }
    function employee(elem: ArrayHierarchical.IEmployee): string {
        return `{
            "id": ${elem.id},
            "name": ${$string(elem.name)},
            "age": ${elem.age},
            "grade": ${elem.grade},
            "employeed_at": ${timestamp(elem.employeed_at)}
        }`;
    }
    function timestamp(elem: ArrayHierarchical.ITimestamp): string {
        return `{
            "time": ${elem.time},
            "zone": ${elem.zone}
        }`;
    }

    return `[${array.map((elem) => company(elem)).join(",")}]`;
}
