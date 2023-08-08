import { validateSync } from "class-validator";

import { ClassValidatorArrayRecursiveUnionExplicit } from "../../benchmark/structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionExplicit } from "../structures/ArrayRecursiveUnionExplicit";

console.log(
    ClassValidatorArrayRecursiveUnionExplicit.validate(
        ArrayRecursiveUnionExplicit.generate(),
    ),
);

console.log(
    ClassValidatorArrayRecursiveUnionExplicit.transform(
        ArrayRecursiveUnionExplicit.trail(),
    )
        .map((i) => validateSync(i))
        .flat(),
);
