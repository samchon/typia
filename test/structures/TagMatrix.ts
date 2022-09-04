import { v4 } from "uuid";

import { RandomGenerator } from "../internal/RandomGenerator";

export interface TagMatrix {
    /**
     * Doubled array.
     *
     * @items 3
     * @format uuid
     */
    matrix: string[][];
}
export namespace TagMatrix {
    export function generate(): TagMatrix {
        return {
            matrix: RandomGenerator.array(
                () => RandomGenerator.array(() => v4(), 3),
                3,
            ),
        };
    }
}
