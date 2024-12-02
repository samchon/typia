import ts from "typescript";

import { IMetadataComponents } from "../schemas/metadata/IMetadataComponents";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataAliasType } from "../schemas/metadata/MetadataAliasType";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";

import { Writable } from "../typings/Writable";

import { MapUtil } from "../utils/MapUtil";

import { CommentFactory } from "./CommentFactory";
import { TypeFactory } from "./TypeFactory";

export class MetadataCollection {
  private objects_: Map<ts.Type, MetadataObjectType>;
  private object_unions_: Map<string, MetadataObjectType[]>;
  private aliases_: Map<ts.Type, MetadataAliasType>;
  private arrays_: Map<ts.Type, MetadataArrayType>;
  private tuples_: Map<ts.Type, MetadataTupleType>;

  private names_: Map<string, Map<ts.Type, string>>;
  private object_index_: number;
  private recursive_array_index_: number;
  private recursive_tuple_index_: number;

  public constructor(private options?: Partial<MetadataCollection.IOptions>) {
    this.objects_ = new Map();
    this.object_unions_ = new Map();
    this.aliases_ = new Map();
    this.arrays_ = new Map();
    this.tuples_ = new Map();

    this.names_ = new Map();
    this.object_index_ = 0;
    this.recursive_array_index_ = 0;
    this.recursive_tuple_index_ = 0;
  }

  public clone(): MetadataCollection {
    const output: MetadataCollection = new MetadataCollection(this.options);
    output.objects_ = new Map(this.objects_);
    output.object_unions_ = new Map(this.object_unions_);
    output.aliases_ = new Map(this.aliases_);
    output.arrays_ = new Map(this.arrays_);
    output.tuples_ = new Map(this.tuples_);
    output.names_ = new Map(this.names_);
    output.object_index_ = this.object_index_;
    output.recursive_array_index_ = this.recursive_array_index_;
    output.recursive_tuple_index_ = this.recursive_tuple_index_;
    return output;
  }

  /* -----------------------------------------------------------
        ACCESSORS
    ----------------------------------------------------------- */
  public aliases(): MetadataAliasType[] {
    return [...this.aliases_.values()];
  }

  public objects(): MetadataObjectType[] {
    return [...this.objects_.values()];
  }

  public unions(): MetadataObjectType[][] {
    return [...this.object_unions_.values()];
  }

  public arrays(): MetadataArrayType[] {
    return [...this.arrays_.values()];
  }

  public tuples(): MetadataTupleType[] {
    return [...this.tuples_.values()];
  }

  private getName(checker: ts.TypeChecker, type: ts.Type): string {
    const name: string = (() => {
      const str: string = TypeFactory.getFullName({
        checker,
        type,
      });
      return this.options?.replace ? this.options.replace(str) : str;
    })();

    const duplicates: Map<ts.Type, string> = MapUtil.take(
      this.names_,
      name,
      () => new Map(),
    );
    const oldbie: string | undefined = duplicates.get(type);
    if (oldbie !== undefined) return oldbie;

    const addicted: string = duplicates.size
      ? `${name}.o${duplicates.size}`
      : name;
    duplicates.set(type, addicted);
    return addicted;
  }

  /**
   * @internal
   */
  public getUnionIndex(meta: Metadata): number {
    const key: string = meta.objects.map((obj) => obj.type.name).join(" | ");
    MapUtil.take(this.object_unions_, key, () =>
      meta.objects.map((o) => o.type),
    );
    return [...this.object_unions_.keys()].indexOf(key);
  }

  /* -----------------------------------------------------------
        INSTANCES
    ----------------------------------------------------------- */
  public emplace(
    checker: ts.TypeChecker,
    type: ts.Type,
  ): [MetadataObjectType, boolean] {
    const oldbie = this.objects_.get(type);
    if (oldbie !== undefined) return [oldbie, false];

    const id: string = this.getName(checker, type);
    const obj: MetadataObjectType = MetadataObjectType.create({
      name: id,
      properties: [],
      description:
        (type.aliasSymbol && CommentFactory.description(type.aliasSymbol)) ??
        (type.symbol && CommentFactory.description(type.symbol)) ??
        undefined,
      jsDocTags:
        type.aliasSymbol?.getJsDocTags() ?? type.symbol?.getJsDocTags() ?? [],
      validated: false,
      index: this.object_index_++,
      recursive: null!,
      nullables: [],
    });
    this.objects_.set(type, obj);
    return [obj, true];
  }

  public emplaceAlias(
    checker: ts.TypeChecker,
    type: ts.Type,
    symbol: ts.Symbol,
  ): [MetadataAliasType, boolean, (meta: Metadata) => void] {
    const oldbie = this.aliases_.get(type);
    if (oldbie !== undefined) return [oldbie, false, () => {}];

    const id: string = this.getName(checker, type);
    const alias: MetadataAliasType = MetadataAliasType.create({
      name: id,
      value: null!,
      description: CommentFactory.description(symbol) ?? null,
      recursive: null!,
      nullables: [],
      jsDocTags: symbol.getJsDocTags() ?? [],
    });
    this.aliases_.set(type, alias);
    return [alias, true, (meta) => (Writable(alias).value = meta)];
  }

  public emplaceArray(
    checker: ts.TypeChecker,
    type: ts.Type,
  ): [MetadataArrayType, boolean, (meta: Metadata) => void] {
    const oldbie = this.arrays_.get(type);
    if (oldbie !== undefined) return [oldbie, false, () => {}];

    const id = this.getName(checker, type);
    const array: MetadataArrayType = MetadataArrayType.create({
      name: id,
      value: null!,
      index: null,
      recursive: null!,
      nullables: [],
    });
    this.arrays_.set(type, array);
    return [array, true, (meta) => (Writable(array).value = meta)];
  }

  public emplaceTuple(
    checker: ts.TypeChecker,
    type: ts.TupleType,
  ): [MetadataTupleType, boolean, (elements: Metadata[]) => void] {
    const oldbie = this.tuples_.get(type);
    if (oldbie !== undefined) return [oldbie, false, () => {}];

    const id = this.getName(checker, type);
    const tuple: MetadataTupleType = MetadataTupleType.create({
      name: id,
      elements: null!,
      index: null,
      recursive: null!,
      nullables: [],
    });
    this.tuples_.set(type, tuple);
    return [tuple, true, (elements) => (Writable(tuple).elements = elements)];
  }

  /**
   * @internal
   */
  public setObjectRecursive(obj: MetadataObjectType, recursive: boolean): void {
    Writable(obj).recursive = recursive;
  }

  /**
   * @internal
   */
  public setAliasRecursive(alias: MetadataAliasType, recursive: boolean): void {
    Writable(alias).recursive = recursive;
  }

  /**
   * @internal
   */
  public setArrayRecursive(array: MetadataArrayType, recursive: boolean): void {
    Writable(array).recursive = recursive;
    if (recursive) Writable(array).index = this.recursive_array_index_++;
  }

  public setTupleRecursive(tuple: MetadataTupleType, recursive: boolean): void {
    Writable(tuple).recursive = recursive;
    if (recursive) Writable(tuple).index = this.recursive_tuple_index_++;
  }

  public toJSON(): IMetadataComponents {
    return {
      objects: this.objects().map((o) => o.toJSON()),
      aliases: this.aliases().map((d) => d.toJSON()),
      arrays: [...this.arrays_.values()].map((a) => a.toJSON()),
      tuples: [...this.tuples_.values()].map((t) => t.toJSON()),
    };
  }
}
export namespace MetadataCollection {
  export interface IOptions {
    replace?(str: string): string;
  }

  export const replace = (str: string): string => {
    let replaced: string = str;
    for (const [before] of REPLACERS)
      replaced = replaced.split(before).join("");
    if (replaced.length !== 0) return replaced;

    for (const [before, after] of REPLACERS)
      str = str.split(before).join(after);
    return str;
  };

  export const escape = (str: string): string => {
    for (const [before, after] of REPLACERS)
      if (after !== "") str = str.split(after).join(before);
    return str;
  };
}
const REPLACERS: [string, string][] = [
  ["$", "_dollar_"],
  ["&", "_and_"],
  ["|", "_or_"],
  ["{", "_blt_"],
  ["}", "_bgt_"],
  ["<", "_lt_"],
  [">", "_gt_"],
  ["[", "_alt_"],
  ["]", "_agt_"],
  [",", "_comma_"],
  ["`", "_backquote_"],
  ["'", "_singlequote_"],
  ['"', "_doublequote_"],
  [" ", "_space_"],
  ["?", "_question_"],
  [":", "_colon_"],
  [";", "_semicolon_"],
];
