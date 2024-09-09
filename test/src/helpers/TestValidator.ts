import { ranges } from "tstl";

import { TestRandomGenerator } from "./TestRandomGenerator";

/**
 * Test validator.
 *
 * `TestValidator` is a collection gathering E2E validation functions.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace TestValidator {
  /**
   * Test whether condition is satisfied.
   *
   * @param title Title of error message when condition is not satisfied
   * @return Currying function
   */
  export const predicate =
    (title: string) =>
    <T extends boolean | (() => boolean) | (() => Promise<boolean>)>(
      condition: T,
    ): T extends () => Promise<boolean> ? Promise<void> : void => {
      const message = () =>
        `Bug on ${title}: expected condition is not satisfied.`;

      // SCALAR
      if (typeof condition === "boolean") {
        if (condition !== true) throw new Error(message());
        return undefined as any;
      }

      // CLOSURE
      const output: boolean | Promise<boolean> = condition();
      if (typeof output === "boolean") {
        if (output !== true) throw new Error(message());
        return undefined as any;
      }

      // ASYNCHRONOUS
      return new Promise<void>((resolve, reject) => {
        output
          .then((flag) => {
            if (flag === true) resolve();
            else reject(message());
          })
          .catch(reject);
      }) as any;
    };

  /**
   * Test whether two values are equal.
   *
   * If you want to validate `covers` relationship,
   * call smaller first and then larger.
   *
   * Otherwise you wanna non equals validator, combine with {@link error}.
   *
   * @param title Title of error message when different
   * @param exception Exception filter for ignoring some keys
   * @returns Currying function
   */
  export const equals =
    (title: string, exception: (key: string) => boolean = () => false) =>
    <T>(x: T) =>
    (y: T) => {
      const diff: string[] = json_equal_to(exception)(x)(y);
      if (diff.length)
        throw new Error(
          `Bug on ${title}: found different values - [${diff.join(", ")}]`,
        );
    };

  /**
   * Test whether error occurs.
   *
   * If error occurs, nothing would be happened.
   *
   * However, no error exists, then exception would be thrown.
   *
   * @param title Title of exception because of no error exists
   */
  export const error =
    (title: string) =>
    <T>(task: () => T): T extends Promise<any> ? Promise<void> : void => {
      const message = () => `Bug on ${title}: exception must be thrown.`;
      try {
        const output: T = task();
        if (is_promise(output))
          return new Promise<void>((resolve, reject) =>
            output.catch(() => resolve()).then(() => reject(message())),
          ) as any;
        else throw new Error(message());
      } catch {
        return undefined as any;
      }
    };

  export const httpError =
    (title: string) =>
    (status: number) =>
    <T>(task: () => T): T extends Promise<any> ? Promise<void> : void => {
      const message = (actual?: number) =>
        typeof actual === "number"
          ? `Bug on ${title}: status code must be ${status}, but ${actual}.`
          : `Bug on ${title}: status code must be ${status}, but succeeded.`;
      const predicate = (exp: any): Error | null =>
        typeof exp === "object" &&
        exp.constructor.name === "HttpError" &&
        exp.status === status
          ? null
          : new Error(
              message(
                typeof exp === "object" && exp.constructor.name === "HttpError"
                  ? exp.status
                  : undefined,
              ),
            );
      try {
        const output: T = task();
        if (is_promise(output))
          return new Promise<void>((resolve, reject) =>
            output
              .catch((exp) => {
                const res: Error | null = predicate(exp);
                if (res) reject(res);
                else resolve();
              })
              .then(() => reject(new Error(message()))),
          ) as any;
        else throw new Error(message());
      } catch (exp) {
        const res: Error | null = predicate(exp);
        if (res) throw res;
        return undefined!;
      }
    };

  export function proceed(task: () => Promise<any>): Promise<Error | null>;
  export function proceed(task: () => any): Error | null;
  export function proceed(
    task: () => any,
  ): Promise<Error | null> | (Error | null) {
    try {
      const output: any = task();
      if (is_promise(output))
        return new Promise<Error | null>((resolve) =>
          output
            .catch((exp) => resolve(exp as Error))
            .then(() => resolve(null)),
        );
    } catch (exp) {
      return exp as Error;
    }
    return null;
  }

  /**
   * Validate index API.
   *
   * Test whether two indexed values are equal.
   *
   * If two values are different, then exception would be thrown.
   *
   * @param title Title of error message when different
   * @return Currying function
   *
   * @example https://github.com/samchon/nestia-template/blob/master/src/test/features/api/bbs/test_api_bbs_article_index_search.ts
   */
  export const index =
    (title: string) =>
    <Solution extends IEntity<any>>(expected: Solution[]) =>
    <Summary extends IEntity<any>>(
      gotten: Summary[],
      trace: boolean = true,
    ): void => {
      const length: number = Math.min(expected.length, gotten.length);
      expected = expected.slice(0, length);
      gotten = gotten.slice(0, length);

      const xIds: string[] = get_ids(expected).slice(0, length);
      const yIds: string[] = get_ids(gotten)
        .filter((id) => id >= xIds[0]!)
        .slice(0, length);

      const equals: boolean = xIds.every((x, i) => x === yIds[i]);
      if (equals === true) return;
      else if (trace === true)
        console.log({
          expected: xIds,
          gotten: yIds,
        });
      throw new Error(
        `Bug on ${title}: result of the index is different with manual aggregation.`,
      );
    };

  /**
   * Valiate search options.
   *
   * Test a pagination API supporting search options.
   *
   * @param title Title of error message when searching is invalid
   * @returns Currying function
   *
   * @example https://github.com/samchon/nestia-template/blob/master/src/test/features/api/bbs/test_api_bbs_article_index_search.ts
   */
  export const search =
    (title: string) =>
    /**
     * @param getter A pagination API function to be called
     */
    <Entity extends IEntity<any>, Request>(
      getter: (input: Request) => Promise<Entity[]>,
    ) =>
    /**
     * @param total Total entity records for comparison
     * @param sampleCount Sampling count. Default is 1
     */
    (total: Entity[], sampleCount: number = 1) =>
    /**
     * @param props Search properties
     */
    async <Values extends any[]>(
      props: ISearchProps<Entity, Values, Request>,
    ): Promise<void> => {
      const samples: Entity[] = TestRandomGenerator.sample(total)(sampleCount);
      for (const s of samples) {
        const values: Values = props.values(s);
        const filtered: Entity[] = total.filter((entity) =>
          props.filter(entity, values),
        );
        const gotten: Entity[] = await getter(props.request(values));

        TestValidator.index(`${title} (${props.fields.join(", ")})`)(filtered)(
          gotten,
        );
      }
    };

  export interface ISearchProps<
    Entity extends IEntity<any>,
    Values extends any[],
    Request,
  > {
    fields: string[];
    values(entity: Entity): Values;
    filter(entity: Entity, values: Values): boolean;
    request(values: Values): Request;
  }

  /**
   * Validate sorting options.
   *
   * Test a pagination API supporting sorting options.
   *
   * You can validate detailed sorting options both asceding and descending orders
   * with multiple fields. However, as it forms a complicate currying function,
   * I recomend you to see below example code before using.
   *
   * @param title Title of error message when sorting is invalid
   * @example https://github.com/samchon/nestia-template/blob/master/src/test/features/api/bbs/test_api_bbs_article_index_sort.ts
   */
  export const sort =
    (title: string) =>
    /**
     * @param getter A pagination API function to be called
     */
    <
      T extends object,
      Fields extends string,
      Sortable extends Array<`-${Fields}` | `+${Fields}`>,
    >(
      getter: (sortable: Sortable) => Promise<T[]>,
    ) =>
    /**
     * @param fields List of fields to be sorted
     */
    (...fields: Fields[]) =>
    /**
     * @param comp Comparator function for validation
     * @param filter Filter function for data if required
     */
    (comp: (x: T, y: T) => number, filter?: (elem: T) => boolean) =>
    /**
     * @param direction "+" means ascending order, and "-" means descending order
     */
    async (direction: "+" | "-", trace: boolean = true) => {
      let data: T[] = await getter(
        fields.map((field) => `${direction}${field}` as const) as Sortable,
      );
      if (filter) data = data.filter(filter);

      const reversed: typeof comp =
        direction === "+" ? comp : (x, y) => comp(y, x);
      if (ranges.is_sorted(data, (x, y) => reversed(x, y) < 0) === false) {
        if (
          fields.length === 1 &&
          data.length &&
          (data as any)[0][fields[0]] !== undefined &&
          trace
        )
          console.log(data.map((elem) => (elem as any)[fields[0]]));
        throw new Error(
          `Bug on ${title}: wrong sorting on ${direction}(${fields.join(
            ", ",
          )}).`,
        );
      }
    };

  export type Sortable<Literal extends string> = Array<
    `-${Literal}` | `+${Literal}`
  >;
}

interface IEntity<Type extends string | number | bigint> {
  id: Type;
}

function get_ids<Entity extends IEntity<any>>(entities: Entity[]): string[] {
  return entities.map((entity) => entity.id).sort((x, y) => (x < y ? -1 : 1));
}

function is_promise(input: any): input is Promise<any> {
  return (
    typeof input === "object" &&
    input !== null &&
    typeof (input as any).then === "function" &&
    typeof (input as any).catch === "function"
  );
}

const json_equal_to =
  (exception: (key: string) => boolean) =>
  <T>(x: T) =>
  (y: T): string[] => {
    const container: string[] = [];
    const iterate =
      (accessor: string) =>
      (x: any) =>
      (y: any): void => {
        if (typeof x !== typeof y) container.push(accessor);
        else if (x instanceof Array)
          if (!(y instanceof Array)) container.push(accessor);
          else array(accessor)(x)(y);
        else if (x instanceof Object) object(accessor)(x)(y);
        else if (
          x !== y &&
          !(
            typeof x === "string" &&
            x.replaceAll("\r\n", "\n") === y.replaceAll("\r\n", "n")
          )
        )
          container.push(accessor);
      };
    const array =
      (accessor: string) =>
      (x: any[]) =>
      (y: any[]): void => {
        if (x.length !== y.length) container.push(`${accessor}.length`);
        x.forEach((xItem, i) => iterate(`${accessor}[${i}]`)(xItem)(y[i]));
      };
    const object =
      (accessor: string) =>
      (x: any) =>
      (y: any): void =>
        Object.keys(x)
          .filter((key) => x[key] !== undefined && !exception(key))
          .forEach((key) => iterate(`${accessor}.${key}`)(x[key])(y[key]));

    iterate("")(x)(y);
    return container;
  };
