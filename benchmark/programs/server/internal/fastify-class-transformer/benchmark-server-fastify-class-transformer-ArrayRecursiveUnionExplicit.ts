import { instanceToPlain, plainToInstance } from "class-transformer";

import { ArrayRecursiveUnionExplicit } from "../../../../../test/structures/ArrayRecursiveUnionExplicit";
import { ClassValidatorArrayRecursiveUnionExplicit } from "../../../../structures/class-validator/ClassValidatorArrayRecursiveUnionExplicit";
import { createFastifyCustomServerBenchmarkProgram } from "../createFastifyCustomServerBenchmarkProgram";

createFastifyCustomServerBenchmarkProgram<ArrayRecursiveUnionExplicit>(
    (input) =>
        JSON.stringify(
            input.map((elem) =>
                instanceToPlain(
                    plainToInstance(
                        ClassValidatorArrayRecursiveUnionExplicit,
                        elem,
                    ),
                ),
            ),
        ),
);
