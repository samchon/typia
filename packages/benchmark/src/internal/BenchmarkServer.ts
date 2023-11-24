import fs from "fs";
import tgrid from "tgrid";
import { Driver } from "tgrid/components/Driver";

import { IBenchmarkProgram } from "../programs/IBenchmarkProgram";
import { Spoiler } from "../structures/Spoiler";
import { ArrayHierarchical } from "../structures/pure/ArrayHierarchical";
import { ArrayRecursive } from "../structures/pure/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../structures/pure/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../structures/pure/ArrayRecursiveUnionImplicit";
import { ArraySimple } from "../structures/pure/ArraySimple";
import { ObjectHierarchical } from "../structures/pure/ObjectHierarchical";
import { ObjectRecursive } from "../structures/pure/ObjectRecursive";
import { ObjectSimple } from "../structures/pure/ObjectSimple";
import { ObjectUnionExplicit } from "../structures/pure/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../structures/pure/ObjectUnionImplicit";
import { UltimateUnion } from "../structures/pure/UltimateUnion";

const EXTENSION = __filename.substr(-2);

export namespace BenchmarkServer {
  export interface IAggregation {
    category: string;
    libraries: string[];
    types: string[];
    result: Record<
      string,
      Record<string, IBenchmarkProgram.IMeasurement | null>
    >;
  }

  export async function measure(category: string): Promise<IAggregation> {
    console.log("---------------------------------------------------");
    console.log(`  ${category} benchmark`);
    console.log("---------------------------------------------------");

    const location: string = `${__dirname}/../programs/${category}`;
    const libraries: string[] = await findLibaries(location);
    const types: string[] = await findTypes(
      libraries.map((str) => `${location}/${str}`),
    );
    const result: Record<
      string,
      Record<string, IBenchmarkProgram.IMeasurement | null>
    > = {};

    for (const type of types)
      result[type] = await measureType({
        category,
        type,
        libraries,
      });

    console.log("\n");
    return {
      category,
      libraries,
      types,
      result,
    };
  }

  const measureType = async (props: {
    category: string;
    type: string;
    libraries: string[];
  }): Promise<Record<string, IBenchmarkProgram.IMeasurement | null>> => {
    console.log(`  - ${props.type}`);

    const result: Record<string, IBenchmarkProgram.IMeasurement | null> = {};
    for (const library of props.libraries) {
      const file: string = `${__dirname}/../programs/${props.category}/${library}/benchmark-${props.category}-${library}-${props.type}.${EXTENSION}`;
      result[library] = fs.existsSync(file)
        ? await measureFunction(props.type)(file)
        : null;

      console.log(`    - ${library}:`, result[library] !== null);
    }
    return result;
  };

  const measureFunction =
    <T>(type: string) =>
    async (file: string): Promise<IBenchmarkProgram.IMeasurement | null> => {
      const factory = FACTORIES[type];
      const connector = new tgrid.protocols.workers.WorkerConnector(
        null,
        null,
        "process",
      );
      await connector.connect(file);

      const base = connector.getDriver<IBenchmarkProgram<T>>();
      const result: IBenchmarkProgram.IMeasurement | null =
        (await base.type()) === "success"
          ? await measureSuccess(type)(factory)(connector.getDriver())
          : await measureFailure(factory)(connector.getDriver());

      await connector.close();
      return result;
    };

  const measureSuccess =
    (type: string) =>
    <T>(factory: IFactory<T>) =>
    async (controller: Driver<IBenchmarkProgram.ISuccessProgram<T>>) => {
      const input: any = factory.generate();
      const tolerable = async () => {
        if (await controller.skip(type)) return true;
        for (const s of factory.SPOILERS) {
          const fake: any = factory.generate();
          s(fake);
          if (await controller.validate(fake)) return false;
        }
        return controller.validate(input);
      };
      return (await tolerable()) ? controller.success(input) : null;
    };

  const measureFailure =
    <T>(factory: IFactory<T>) =>
    async (controller: Driver<IBenchmarkProgram.IFailureProgram<T>>) => {
      const data: T[] = [
        ...new Array(99).fill(0).map(() => factory.generate()),
        factory.trail(),
      ];
      const tolerable = async () => {
        for (const s of factory.SPOILERS) {
          const fake: T = factory.generate();
          s(fake);
          if (await controller.validate([fake])) return false;
        }
        return controller.validate(data.slice(0, 99));
      };
      return (await tolerable()) ? controller.failure(data) : null;
    };

  async function findLibaries(path: string): Promise<string[]> {
    const directory: string[] = [];
    for (const file of await fs.promises.readdir(path)) {
      if (file === "internal") continue;
      const stats: fs.Stats = await fs.promises.stat(`${path}/${file}`);
      if (stats.isDirectory()) directory.push(file);
    }
    const index = (str: string) => LIBARIES.findIndex((s) => s === str);
    return directory.sort((x, y) => index(x) - index(y));
  }

  async function findTypes(directories: string[]): Promise<string[]> {
    const set: Set<string> = new Set();
    for (const directory of directories) {
      const files: string[] = await fs.promises.readdir(directory);
      files
        .filter((f) => f.includes("create") === false)
        .map((f) => f.split("-").at(-1)!)
        .map((str) => str.substring(0, str.length - 3))
        .forEach((str) => set.add(str));
    }
    const index = (str: string) =>
      Object.keys(FACTORIES).findIndex((s) => s === str);
    return [...set].sort((x, y) => index(x) - index(y));
  }

  interface IFactory<T> {
    generate(): T;
    trail(): T;
    SPOILERS: Spoiler<T>[];
  }
  const FACTORIES: Record<string, IFactory<any>> = {
    ObjectSimple: ObjectSimple,
    ObjectHierarchical: ObjectHierarchical,
    ObjectRecursive: ObjectRecursive,
    ObjectUnionExplicit: ObjectUnionExplicit,
    ObjectUnionImplicit: ObjectUnionImplicit,
    ArraySimple: ArraySimple,
    ArrayHierarchical: ArrayHierarchical,
    ArrayRecursive: ArrayRecursive,
    ArrayRecursiveUnionExplicit: ArrayRecursiveUnionExplicit,
    ArrayRecursiveUnionImplicit: ArrayRecursiveUnionImplicit,
    UltimateUnion: UltimateUnion,
  };
  const LIBARIES: string[] = [
    "typia",
    "typebox",
    "ajv",
    "io-ts",
    "zod",
    "class-validator",
    //
    "typia.stringify",
    "typia.isStringify",
    "typia.assertStringify",
    "fast-json-stringify",
    "JSON.stringify",
    "class-transformer",
    //
    "fastify-typia",
    "fastify-pure",
    "fastify-class-transformer",
    "express-typia",
    "express-pure",
    "express-class-transformer",
  ];
}
