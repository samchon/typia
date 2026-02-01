//================================================================
/**
 * @packageDocumentation
 * @module std
 */
//================================================================
/**
 * Pointer referencing value.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IPointer<T> {
  /**
   * Reference of the value.
   */
  value: T;
}

export namespace IPointer {
  /**
   * Inference of value type.
   */
  export type ValueType<Pointer extends IPointer<any>> =
    Pointer extends IPointer<infer T> ? T : unknown;
}
