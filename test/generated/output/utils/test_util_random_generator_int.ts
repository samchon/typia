import { TestRandomGenerator } from "../../../helpers/TestRandomGenerator";
export function test_util_rnadom_generator_int() {
    new Array(100000).fill(0).forEach(() => {
        const value: number = TestRandomGenerator.integer(0, 3);
        if (value < 0 || value > 3)
            throw new Error("Bug on TestRandomGenerator.integer(): wrong computation.");
    });
}
