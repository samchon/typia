import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { CvObjectUnionImplicit } from "../../benchmark/structures/class-validator/CvObjectUnionImplicit";
import { ObjectUnionImplicit } from "../structures/ObjectUnionImplicit";

function check(obj: ObjectUnionImplicit) {
    const errors: cv.ValidationError[] = [];
    for (const item of obj) {
        const cla = tr.plainToClass(CvObjectUnionImplicit, item);
        const valid = cv.validateSync(cla);
        errors.push(...valid);
    }
    return errors;
}

console.log(check(ObjectUnionImplicit.generate()).length);
for (const spiler of ObjectUnionImplicit.SPOILERS) {
    const data = ObjectUnionImplicit.generate();
    spiler(data);
    const errors = check(data);
    console.log(spiler.toString().indexOf("null") !== -1, check(data).length);
}
