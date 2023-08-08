import fs from "fs";
import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { DynamicJsonValue } from "../structures/DynamicJsonValue";

const factory = typia.createAssert<DynamicJsonValue>();
const validate = (spoiler: Spoiler<DynamicJsonValue>) => {
    const input = DynamicJsonValue.generate();
    const expected = spoiler(input)[0];
    try {
        factory(input);
        console.log("failed to catch", expected);
    } catch (exp) {
        if (!typia.is<typia.TypeGuardError>(exp)) throw exp;
        console.log({
            expected,
            actual: exp.path,
        });
    }
};

for (const spoiler of DynamicJsonValue.SPOILERS) validate(spoiler);

fs.writeFileSync(
    __dirname + "/nestia-346-assert.out.js",
    factory.toString(),
    "utf8",
);
