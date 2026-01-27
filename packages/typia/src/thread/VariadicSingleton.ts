//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { HashMap } from "../container/HashMap";
import { hash } from "../functional/hash";
import { equal } from "../ranges/algorithm/iterations";
import { Singleton } from "./Singleton";

/**
 * Variadic singleton generator.
 *
 * @author Jeongho Nam - https://github.comm/samchon
 */
export class VariadicSingleton<T, Args extends any[]> {
  private readonly closure_: (...args: Args) => T;
  private readonly dict_: HashMap<Args, Singleton<T, Args>>;

  public constructor(
    closure: (...args: Args) => T,
    hashFunc: (args: Args) => number = (args) => hash(...args),
    pred: (x: Args, y: Args) => boolean = equal,
  ) {
    this.closure_ = closure;
    this.dict_ = new HashMap(hashFunc, pred);
  }

  public get(...args: Args): T {
    let it: HashMap.Iterator<Args, Singleton<T, Args>> = this.dict_.find(args);
    if (it.equals(this.dict_.end()) == true)
      it = this.dict_.emplace(args, new Singleton(this.closure_)).first;
    return it.second.get(...args);
  }
}
