//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { InvalidArgument } from "../../exception/InvalidArgument";
import { OutOfRange } from "../../exception/OutOfRange";

export namespace ErrorGenerator {
  /* ---------------------------------------------------------
        COMMON
    --------------------------------------------------------- */
  export function get_class_name(instance: string | Instance): string {
    if (typeof instance === "string") return instance;

    let ret: string = instance.constructor.name;
    if (instance.constructor.__MODULE)
      ret = `${instance.constructor.__MODULE}.${ret}`;

    return `std.${ret}`;
  }

  /* ---------------------------------------------------------
        CONTAINERS
    --------------------------------------------------------- */
  export function empty(instance: Instance, method: string): OutOfRange {
    return new OutOfRange(
      `Error on ${get_class_name(instance)}.${method}(): it's empty container.`,
    );
  }

  export function negative_index(
    instance: Instance,
    method: string,
    index: number,
  ): OutOfRange {
    return new OutOfRange(
      `Error on ${get_class_name(
        instance,
      )}.${method}(): parametric index is negative -> (index = ${index}).`,
    );
  }

  export function excessive_index(
    instance: Instance,
    method: string,
    index: number,
    size: number,
  ): OutOfRange {
    return new OutOfRange(
      `Error on ${get_class_name(
        instance,
      )}.${method}(): parametric index is equal or greater than size -> (index = ${index}, size: ${size}).`,
    );
  }

  export function not_my_iterator(
    instance: Instance,
    method: string,
  ): InvalidArgument {
    return new InvalidArgument(
      `Error on ${get_class_name(
        instance,
      )}.${method}(): parametric iterator is not this container's own.`,
    );
  }

  export function erased_iterator(
    instance: Instance,
    method: string,
  ): InvalidArgument {
    return new InvalidArgument(
      `Error on ${get_class_name(
        instance,
      )}.${method}(): parametric iterator, it already has been erased.`,
    );
  }

  export function negative_iterator(
    instance: Instance,
    method: string,
    index: number,
  ): OutOfRange {
    return new OutOfRange(
      `Error on ${get_class_name(
        instance,
      )}.${method}(): parametric iterator is directing negative position -> (index = ${index}).`,
    );
  }

  export function iterator_end_value(
    instance: Instance,
    method: string = "end",
  ): OutOfRange {
    const className: string = get_class_name(instance);
    return new OutOfRange(
      `Error on ${className}.Iterator.value: cannot access to the ${className}.${method}().value.`,
    );
  }

  export function key_nout_found<Key>(
    instance: Instance,
    method: string,
    key: Key,
  ): OutOfRange {
    throw new OutOfRange(
      `Error on ${get_class_name(
        instance,
      )}.${method}(): unable to find the matched key -> ${key}`,
    );
  }
}

interface Instance {
  constructor: {
    name: string;
    __MODULE?: string;
  };
}
