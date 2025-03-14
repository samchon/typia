import { ClassProperties } from "../../typings/ClassProperties";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { IMetadata } from "./IMetadata";
import { IMetadataDictionary } from "./IMetadataDictionary";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { MetadataAlias } from "./MetadataAlias";
import { MetadataArray } from "./MetadataArray";
import { MetadataAtomic } from "./MetadataAtomic";
import { MetadataConstant } from "./MetadataConstant";
import { MetadataEscaped } from "./MetadataEscaped";
import { MetadataFunction } from "./MetadataFunction";
import { MetadataMap } from "./MetadataMap";
import { MetadataNative } from "./MetadataNative";
import { MetadataObject } from "./MetadataObject";
import { MetadataObjectType } from "./MetadataObjectType";
import { MetadataSet } from "./MetadataSet";
import { MetadataTemplate } from "./MetadataTemplate";
import { MetadataTuple } from "./MetadataTuple";

export class Metadata {
  public any: boolean;
  public required: boolean;
  public optional: boolean;
  public nullable: boolean;

  public escaped: MetadataEscaped | null;
  public atomics: MetadataAtomic[];
  public constants: MetadataConstant[];
  public templates: MetadataTemplate[];

  public rest: Metadata | null;
  public aliases: MetadataAlias[];
  public arrays: MetadataArray[];
  public tuples: MetadataTuple[];
  public objects: MetadataObject[];
  public functions: MetadataFunction[];

  public natives: MetadataNative[];
  public sets: MetadataSet[];
  public maps: MetadataMap[];

  /** @internal */ private name_?: string;
  /** @internal */ private parent_resolved_: boolean = false;
  /** @internal */ public union_index?: number;
  /** @internal */ public fixed_?: number | null;
  /** @internal */ public boolean_literal_intersected_?: boolean;
  /** @internal */ private is_sequence_?: boolean;

  /* -----------------------------------------------------------
    CONSTRUCTORS
  ----------------------------------------------------------- */
  /**
   * @hidden
   */
  private constructor(props: ClassProperties<Metadata>) {
    this.any = props.any;
    this.required = props.required;
    this.optional = props.optional;
    this.nullable = props.nullable;
    this.functions = props.functions;

    this.escaped = props.escaped;
    this.atomics = props.atomics;
    this.constants = props.constants;
    this.templates = props.templates;

    this.rest = props.rest;
    this.arrays = props.arrays;
    this.tuples = props.tuples;
    this.objects = props.objects;
    this.aliases = props.aliases;

    this.natives = props.natives;
    this.sets = props.sets;
    this.maps = props.maps;
  }

  /**
   * @internal
   */
  public static create(props: ClassProperties<Metadata>): Metadata {
    return new Metadata(props);
  }

  /**
   * @internal
   */
  public static initialize(parentResolved: boolean = false): Metadata {
    const meta: Metadata = Metadata.create({
      any: false,
      nullable: false,
      required: true,
      optional: false,

      escaped: null,
      constants: [],
      atomics: [],
      templates: [],
      arrays: [],
      tuples: [],
      objects: [],
      aliases: [],
      functions: [],

      rest: null,
      natives: [],
      sets: [],
      maps: [],
    });
    meta.parent_resolved_ = parentResolved;
    return meta;
  }

  public toJSON(): IMetadata {
    return {
      any: this.any,
      required: this.required,
      optional: this.optional,
      nullable: this.nullable,
      functions: this.functions.map((f) => f.toJSON()),

      atomics: this.atomics.map((a) => a.toJSON()),
      constants: this.constants.map((c) => c.toJSON()),
      templates: this.templates.map((tpl) => tpl.toJSON()),
      escaped: this.escaped ? this.escaped.toJSON() : null,

      rest: this.rest ? this.rest.toJSON() : null,
      arrays: this.arrays.map((array) => array.toJSON()),
      tuples: this.tuples.map((tuple) => tuple.toJSON()),
      objects: this.objects.map((obj) => obj.toJSON()),
      aliases: this.aliases.map((alias) => alias.toJSON()),

      natives: this.natives.map((native) => native.toJSON()),
      sets: this.sets.map((set) => set.toJSON()),
      maps: this.maps.map((map) => map.toJSON()),
    };
  }

  public static from(meta: IMetadata, dict: IMetadataDictionary): Metadata {
    return Metadata.create({
      any: meta.any,
      required: meta.required,
      optional: meta.optional,
      nullable: meta.nullable,
      functions: meta.functions.map((f) => MetadataFunction.from(f, dict)),

      constants: meta.constants.map(MetadataConstant.from),
      atomics: meta.atomics.map(MetadataAtomic.from),
      templates: meta.templates.map((tpl) => MetadataTemplate.from(tpl, dict)),
      escaped: meta.escaped ? MetadataEscaped.from(meta.escaped, dict) : null,

      rest: meta.rest ? this.from(meta.rest, dict) : null,
      arrays: meta.arrays.map((ref) => {
        const type = dict.arrays.get(ref.name);
        if (type === undefined)
          throw new RangeError(
            `Error on Metadata.from(): failed to find array "${ref.name}".`,
          );
        return MetadataArray.create({
          type,
          tags: ref.tags.map((row) => row.slice()),
        });
      }),
      tuples: meta.tuples.map((t) => {
        const type = dict.tuples.get(t.name);
        if (type === undefined)
          throw new RangeError(
            `Error on Metadata.from(): failed to find tuple "${t.name}".`,
          );
        return MetadataTuple.create({
          type,
          tags: t.tags.map((r) => r.slice()),
        });
      }),
      objects: meta.objects.map((obj) => {
        const found = dict.objects.get(obj.name);
        if (found === undefined)
          throw new RangeError(
            `Error on Metadata.from(): failed to find object "${name}".`,
          );
        return MetadataObject.create({
          type: found,
          tags: obj.tags.map((r) => r.slice()),
        });
      }),
      aliases: meta.aliases.map((alias) => {
        const type = dict.aliases.get(alias.name);
        if (type === undefined)
          throw new RangeError(
            `Error on Metadata.from(): failed to find alias "${alias}".`,
          );
        return MetadataAlias.create({
          type,
          tags: alias.tags.map((r) => r.slice()),
        });
      }),
      natives: meta.natives.map((native) => MetadataNative.create(native)),
      sets: meta.sets.map((set) =>
        MetadataSet.create({
          value: Metadata.from(set.value, dict),
          tags: set.tags.map((r) => r.slice()),
        }),
      ),
      maps: meta.maps.map((map) =>
        MetadataMap.create({
          key: this.from(map.key, dict),
          value: this.from(map.value, dict),
          tags: map.tags.map((r) => r.slice()),
        }),
      ),
    });
  }

  /* -----------------------------------------------------------
    ACCESSORS
  ----------------------------------------------------------- */
  public getName(): string {
    return (this.name_ ??= getName(this));
  }

  public empty(): boolean {
    return this.bucket() === 0 || this.size() === 0;
  }

  public size(): number {
    return (
      (this.any ? 1 : 0) +
      (this.escaped ? 1 : 0) +
      (this.rest ? this.rest.size() : 0) +
      this.templates.length +
      this.atomics.length +
      this.constants.map((c) => c.values.length).reduce((x, y) => x + y, 0) +
      this.arrays.length +
      this.tuples.length +
      this.natives.length +
      this.maps.length +
      this.sets.length +
      this.objects.length +
      this.functions.length +
      this.aliases.length
    );
  }

  public bucket(): number {
    return (
      (this.any ? 1 : 0) +
      (this.escaped ? 1 : 0) +
      (this.templates.length ? 1 : 0) +
      (this.atomics.length ? 1 : 0) +
      (this.constants.length ? 1 : 0) +
      (this.rest ? this.rest.size() : 0) +
      (this.arrays.length ? 1 : 0) +
      (this.tuples.length ? 1 : 0) +
      (this.natives.length ? 1 : 0) +
      (this.sets.length ? 1 : 0) +
      (this.maps.length ? 1 : 0) +
      (this.objects.length ? 1 : 0) +
      (this.functions.length ? 1 : 0) +
      (this.aliases.length ? 1 : 0)
    );
  }

  /**
   * @internal
   */
  public isSequence(): boolean {
    return (this.is_sequence_ ??= (() => {
      const exists = (tags: IMetadataTypeTag[][]): boolean =>
        tags.some((row) => {
          const sequence = row.find(
            (t) =>
              t.kind === "sequence" &&
              typeof (t.schema as any)?.["x-protobuf-sequence"] === "number",
          );
          if (sequence === undefined) return false;
          const value: number = Number(
            (sequence.schema as any)["x-protobuf-sequence"],
          );
          return !Number.isNaN(value);
        });
      return (
        this.atomics.some((atomic) => exists(atomic.tags)) &&
        this.constants.some((c) =>
          c.values.some((v) => exists(v.tags ?? [])),
        ) &&
        this.templates.some((tpl) => exists(tpl.tags)) &&
        this.arrays.some((array) => exists(array.tags)) &&
        this.objects.some((object) => exists(object.tags)) &&
        this.natives.some(
          (native) => native.name === "Uint8Array" && exists(native.tags),
        )
      );
    })());
  }

  public isConstant(): boolean {
    return this.bucket() === (this.constants.length ? 1 : 0);
  }

  public isRequired(): boolean {
    return this.required === true && this.optional === false;
  }

  /**
   * @internal
   */
  public isUnionBucket(): boolean {
    const size: number = this.bucket();
    const emended: number =
      !!this.atomics.length && !!this.constants.length ? size - 1 : size;
    return emended > 1;
  }

  /**
   * @internal
   */
  public getSoleLiteral(): string | null {
    if (
      this.size() === 1 &&
      this.constants.length === 1 &&
      this.constants[0]!.type === "string" &&
      this.constants[0]!.values.length === 1
    )
      return this.constants[0]!.values[0]!.value as string;
    else return null;
  }

  public isSoleLiteral(): boolean {
    return this.getSoleLiteral() !== null;
  }

  /**
   * @internal
   */
  public isParentResolved(): boolean {
    return this.parent_resolved_;
  }
}
export namespace Metadata {
  export const intersects = (x: Metadata, y: Metadata): boolean => {
    // CHECK ANY & OPTIONAL
    if (x.any || y.any) return true;
    if (x.isRequired() === false && false === y.isRequired()) return true;
    if (x.nullable === true && true === y.nullable) return true;
    if (!!x.functions.length && !!y.functions.length === true) return true;

    //----
    // INSTANCES
    //----
    // ARRAYS
    if (x.arrays.length && y.arrays.length) return true;
    if (x.tuples.length && y.tuples.length) return true;
    if (x.objects.length && y.objects.length) return true;
    if (x.aliases.length && y.aliases.length) return true;

    // NATIVES
    if (x.natives.length && y.natives.length)
      if (x.natives.some((xn) => y.natives.some((yn) => xn === yn)))
        return true;

    // ESCAPED
    if (x.escaped && y.escaped)
      return (
        intersects(x.escaped.original, y.escaped.original) ||
        intersects(x.escaped.returns, y.escaped.returns)
      );

    //----
    // VALUES
    //----
    // ATOMICS
    for (const atomic of x.atomics) {
      if (y.atomics.some((ya) => atomic.type === ya.type)) return true;
      if (y.constants.some((yc) => atomic.type === yc.type)) return true;
    }

    // CONSTANTS
    for (const constant of x.constants) {
      const atomic: MetadataAtomic | undefined = y.atomics.find(
        (elem) => elem.type === constant.type,
      );
      if (atomic !== undefined) return true;

      const opposite: MetadataConstant | undefined = y.constants.find(
        (elem) => elem.type === constant.type,
      );
      if (opposite === undefined) continue;

      const values: Set<any> = new Set([
        ...constant.values.map((e) => e.value),
        ...opposite.values.map((e) => e.value),
      ]);
      if (values.size !== constant.values.length + opposite.values.length)
        return true;
    }

    // TEMPLATES
    if (!!x.templates.length && y.atomics.some((ya) => ya.type === "string"))
      return true;
    else if (
      !!y.templates.length &&
      x.atomics.some((xa) => xa.type === "string")
    )
      return true;
    return false;
  };

  export const covers = (
    x: Metadata,
    y: Metadata,
    level: number = 0,
    escaped: boolean = false,
  ): boolean => {
    // CHECK ANY
    if (x === y) return false;
    else if (x.any) return true;
    else if (y.any) return false;

    if (escaped === false) {
      if (x.escaped === null && y.escaped !== null) return false;
      else if (
        x.escaped !== null &&
        y.escaped !== null &&
        (!covers(x.escaped.original, y.escaped.original, level, true) ||
          !covers(x.escaped.returns, y.escaped.returns, level, true))
      )
        return false;
    }

    //----
    // INSTANCES
    //----
    if (level === 0) {
      // ARRAYS
      for (const ya of y.arrays)
        if (
          !x.arrays.some((xa) =>
            covers(xa.type.value, ya.type.value, level + 1),
          )
        ) {
          return false;
        }

      // TUPLES
      for (const yt of y.tuples)
        if (
          yt.type.elements.length !== 0 &&
          x.tuples.some(
            (xt) =>
              xt.type.elements.length >= yt.type.elements.length &&
              xt.type.elements
                .slice(yt.type.elements.length)
                .every((xv, i) => covers(xv, yt.type.elements[i]!, level + 1)),
          ) === false
        )
          return false;
    }

    // OBJECTS
    for (const yo of y.objects)
      if (
        x.objects.some((xo) => MetadataObjectType.covers(xo.type, yo.type)) ===
        false
      )
        return false;

    // ALIASES
    for (const yd of y.aliases)
      if (x.aliases.some((xd) => xd.type.name === yd.type.name) === false)
        return false;

    // NATIVES
    for (const yn of y.natives)
      if (x.natives.some((xn) => xn === yn) === false) return false;

    // SETS
    for (const ys of y.sets)
      if (x.sets.some((xs) => covers(xs.value, ys.value)) === false)
        return false;

    //----
    // VALUES
    //----
    // ATOMICS
    if (
      y.atomics.some(
        (ya) => x.atomics.some((xa) => xa.type === ya.type) === false,
      )
    )
      return false;

    // CONSTANTS
    for (const yc of y.constants) {
      if (x.atomics.some((atom) => yc.type === atom.type)) continue;
      const xc: MetadataConstant | undefined = x.constants.find(
        (elem) => elem.type === yc.type,
      );
      if (xc === undefined) return false;
      else if (
        (yc.values.map((e) => e.value) as number[]).some(
          (yv) => xc.values.includes(yv as never) === false,
        )
      )
        return false;
    }

    // FUNCTIONAL
    if (!!x.functions.length === false && !!y.functions.length) return false;

    // SUCCESS
    return true;
  };

  /**
   * @internal
   */
  export const merge = (x: Metadata, y: Metadata): Metadata => {
    const output: Metadata = Metadata.create({
      any: x.any || y.any,
      nullable: x.nullable || y.nullable,
      required: x.required && y.required,
      optional: x.optional || y.optional,
      functions: x.functions.length ? x.functions : y.functions, // @todo
      escaped:
        x.escaped !== null && y.escaped !== null
          ? MetadataEscaped.create({
              original: merge(x.escaped.original, y.escaped.original),
              returns: merge(x.escaped.returns, y.escaped.returns),
            })
          : (x.escaped ?? y.escaped),
      atomics: mergeTaggedTypes({
        container: x.atomics,
        equals: (x, y) => x.type === y.type,
        getter: (x) => x.tags,
      })(y.atomics),
      constants: [...x.constants],
      templates: x.templates.slice(),
      rest:
        x.rest !== null && y.rest !== null
          ? merge(x.rest, y.rest)
          : (x.rest ?? y.rest),
      arrays: mergeTaggedTypes({
        container: x.arrays,
        equals: (x, y) => x.type.name === y.type.name,
        getter: (x) => x.tags,
      })(y.arrays),
      tuples: mergeTaggedTypes({
        container: x.tuples,
        equals: (x, y) => x.type.name === y.type.name,
        getter: (x) => x.tags,
      })(y.tuples),
      objects: mergeTaggedTypes({
        container: x.objects,
        equals: (x, y) => x.type.name === y.type.name,
        getter: (x) => x.tags,
      })(y.objects),
      aliases: mergeTaggedTypes({
        container: x.aliases,
        equals: (x, y) => x.type.name === y.type.name,
        getter: (x) => x.tags,
      })(y.aliases),
      natives: mergeTaggedTypes({
        container: x.natives,
        equals: (x, y) => x.name === y.name,
        getter: (x) => x.tags,
      })(y.natives),
      sets: mergeTaggedTypes({
        container: x.sets,
        equals: (x, y) => x.value.getName() === y.value.getName(),
        getter: (x) => x.tags,
      })(y.sets),
      maps: mergeTaggedTypes({
        container: x.maps,
        equals: (x, y) =>
          x.key.getName() === y.key.getName() &&
          x.value.getName() === y.value.getName(),
        getter: (x) => x.tags,
      })(y.maps),
    });
    for (const constant of y.constants) {
      const target: MetadataConstant = ArrayUtil.take(
        output.constants,
        (elem) => elem.type === constant.type,
        () =>
          MetadataConstant.create({
            type: constant.type,
            values: [],
          }),
      );
      for (const value of constant.values)
        ArrayUtil.add(target.values, value, (a, b) => a.value === b.value);
    }
    return output;
  };

  /**
   * @internal
   */
  export const unalias = (w: Metadata) => {
    const visited: Set<Metadata> = new Set();
    while (
      w.size() === 1 &&
      w.nullable === false &&
      w.isRequired() === true &&
      w.aliases.length === 1
    ) {
      if (visited.has(w)) break;
      w = w.aliases[0]!.type.value;
      visited.add(w);
    }
    return w;
  };
}

const getName = (metadata: Metadata): string => {
  if (metadata.any === true) return "any";

  const elements: string[] = [];

  // OPTIONAL
  if (metadata.nullable === true) elements.push("null");
  if (metadata.isRequired() === false) elements.push("undefined");

  // ATOMIC
  for (const atom of metadata.atomics) {
    elements.push(atom.getName());
  }
  for (const constant of metadata.constants)
    for (const value of constant.values) elements.push(value.getName());
  for (const template of metadata.templates) elements.push(template.getName());

  // NATIVES
  for (const native of metadata.natives) elements.push(native.getName());
  for (const set of metadata.sets) elements.push(set.getName());
  for (const map of metadata.maps) elements.push(map.getName());

  // INSTANCES
  if (metadata.rest !== null) elements.push(`...${metadata.rest.getName()}`);
  for (const tuple of metadata.tuples) elements.push(tuple.type.name);
  for (const array of metadata.arrays) elements.push(array.getName());
  for (const object of metadata.objects) elements.push(object.getName());
  for (const alias of metadata.aliases) elements.push(alias.getName());
  if (metadata.escaped !== null) elements.push(metadata.escaped.getName());

  // RETURNS
  if (elements.length === 0) return "unknown";
  else if (elements.length === 1) return elements[0]!;

  elements.sort();
  return `(${elements.join(" | ")})`;
};

const mergeTaggedTypes =
  <T>(props: {
    container: T[];
    equals: (x: T, y: T) => boolean;
    getter: (x: T) => IMetadataTypeTag[][];
  }) =>
  (opposite: T[]) => {
    const output: T[] = [...props.container];
    for (const elem of opposite) {
      const equal = props.container.find((x) => props.equals(x, elem));
      if (equal === undefined) {
        output.push(elem);
        continue;
      }

      const matrix: string[][] = props
        .getter(equal)
        .map((tags) => tags.map((t) => t.name))
        .sort();
      for (const tags of props.getter(elem)) {
        const names: string[] = tags.map((t) => t.name).sort();
        if (
          matrix.some(
            (m) =>
              m.length === names.length && m.every((s, i) => s === names[i]),
          )
        )
          continue;
        props.getter(equal).push(tags);
      }
    }
    return output;
  };
