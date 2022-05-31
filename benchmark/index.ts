import TSON from "../src";
import { Benchmark } from "./internal/Benchmark";

import { hierarchical } from "./data/hierarchical";
import { recursive } from "./data/recursive";
import { tree } from "./data/tree";

import { ICategory } from "./structures/ICategory";
import { ICustomer } from "./structures/ICustomer";

console.log(
    Benchmark.prepare(
        hierarchical,
        (input) => TSON.stringify<ICustomer>(input),
        TSON.createStringifier<ICustomer>(),
    )(),

    Benchmark.prepare(
        recursive,
        (input) => TSON.stringify<ICategory.IInvert>(input),
        TSON.createStringifier<ICategory.IInvert>(),
    )(),

    Benchmark.prepare(
        tree,
        (input) => TSON.stringify<ICategory>(input),
        TSON.createStringifier<ICategory>(),
    )(),
);
