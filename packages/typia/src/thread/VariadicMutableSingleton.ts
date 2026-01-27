//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { HashMap } from "../container/HashMap";
import { hash } from "../functional/hash";
import { equal } from "../ranges/algorithm/iterations";
import { MutableSingleton } from "./MutableSingleton";

/**
 * Variadic mutable singleton generator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class VariadicMutableSingleton<T, Args extends any[]> {
  /**
   * @hidden
   */
  private readonly closure_: (...args: Args) => Promise<T>;

  /**
   * @hidden
   */
  private readonly dict_: HashMap<Args, MutableSingleton<T, Args>>;

  /* ---------------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------------- */
  public constructor(
    closure: (...args: Args) => Promise<T>,
    hashFunc: (args: Args) => number = (args) => hash(...args),
    pred: (x: Args, y: Args) => boolean = equal,
  ) {
    this.closure_ = closure;
    this.dict_ = new HashMap(hashFunc, pred);
  }

  public set(...items: [...Args, T]): Promise<void> {
    const args: Args = items.slice(0, items.length - 1) as Args;
    const value: T = items[items.length - 1];

    return this._Get_singleton(args).set(value);
  }

  public reload(...args: Args): Promise<T> {
    return this._Get_singleton(args).reload(...args);
  }

  public clear(): Promise<void>;
  public clear(...args: Args): Promise<void>;
  public async clear(...args: Args): Promise<void> {
    if (args.length === 0) this.dict_.clear();
    else await this._Get_singleton(args).clear();
  }

  /* ---------------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------------- */
  public get(...args: Args): Promise<T> {
    return this._Get_singleton(args).get(...args);
  }

  public is_loaded(...args: Args): Promise<boolean> {
    return this._Get_singleton(args).is_loaded();
  }

  /**
   * @hidden
   */
  private _Get_singleton(args: Args): MutableSingleton<T, Args> {
    let it: HashMap.Iterator<Args, MutableSingleton<T, Args>> = this.dict_.find(
      args,
    );
    if (it.equals(this.dict_.end()) === true)
      it = this.dict_.emplace(args, new MutableSingleton(this.closure_)).first;
    return it.second;
  }
}
