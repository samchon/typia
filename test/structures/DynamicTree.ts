import { v4 } from "uuid";

import { ArrayUtil } from "../../src/utils/ArrayUtil";

import { RandomGenerator } from "../internal/RandomGenerator";

export interface DynamicTree {
    id: string;
    sequence: number;
    children: Record<string, DynamicTree>;
}
export namespace DynamicTree {
    export function generate(): DynamicTree {
        return create(3, 1);
    }

    function create(limit: number, level: number): DynamicTree {
        const tree: DynamicTree = {
            id: v4(),
            sequence: 0,
            children: {},
        };
        if (level < limit)
            ArrayUtil.repeat(RandomGenerator.integer(2, 5), () => {
                const child: DynamicTree = create(limit, level + 1);
                tree.children[child.id] = child;
            });
        return tree;
    }
}
