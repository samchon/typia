//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ILockable } from "../base/thread/ILockable";
import { ISharedTimedLockable } from "../base/thread/ISharedTimedLockable";
import { List } from "../container/List";
import { InvalidArgument } from "../exception/InvalidArgument";
import { AccessType } from "../internal/thread/AccessType";
import { LockType } from "../internal/thread/LockType";
import { sleep_for } from "./global";

/**
 * Shared timed mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class SharedTimedMutex implements ISharedTimedLockable {
  private source_: ILockable;
  private queue_: List<IResolver>;

  private writing_: number;
  private reading_: number;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * @internal
   */
  public constructor(source: ILockable);

  public constructor(source: ILockable | null = null) {
    this.source_ = source !== null ? source : this;
    this.queue_ = new List();

    this.writing_ = 0;
    this.reading_ = 0;
  }

  private _Current_access_type(): AccessType | null {
    return this.queue_.empty() ? null : this.queue_.front().accessType;
  }

  /* ---------------------------------------------------------
        WRITE LOCK
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public lock(): Promise<void> {
    return new Promise<void>((resolve) => {
      // CONSTRUCT RESOLVER
      const resolver: IResolver = {
        handler: this.writing_++ === 0 && this.reading_ === 0 ? null : resolve,
        accessType: AccessType.WRITE,
        lockType: LockType.HOLD,
      };
      this.queue_.push_back(resolver);

      // LOCK OR WAIT
      if (resolver.handler === null) resolve();
    });
  }

  /**
   * @inheritDoc
   */
  public async try_lock(): Promise<boolean> {
    // LOCKABLE ?
    if (this.writing_ !== 0 || this.reading_ !== 0) return false;

    // CONSTRUCT RESOLVER
    this.queue_.push_back({
      handler: null,
      accessType: AccessType.WRITE,
      lockType: LockType.KNOCK,
    });

    // RETURNS
    ++this.writing_;
    return true;
  }

  /**
   * @inheritDoc
   */
  public try_lock_for(ms: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      // CONSTRUCT RESOLVER
      const it: List.Iterator<IResolver> = this.queue_.insert(
        this.queue_.end(),
        {
          handler:
            this.writing_++ === 0 && this.reading_ === 0 ? null : resolve,
          accessType: AccessType.WRITE,
          lockType: LockType.KNOCK,
        },
      );

      if (it.value.handler === null) resolve(true); // SUCCESS
      else {
        // AUTOMATIC UNLOCK AFTER TIMEOUT
        sleep_for(ms).then(() => {
          // NOT YET, THEN DO UNLOCK
          if (it.value.handler !== null) {
            --this.writing_;
            this._Cancel(it);
          }
        });
      }
    });
  }

  /**
   * @inheritDoc
   */
  public async try_lock_until(at: Date): Promise<boolean> {
    // COMPUTE MILLISECONDS TO WAIT
    const now: Date = new Date();
    const ms: number = at.getTime() - now.getTime();

    return await this.try_lock_for(ms);
  }

  /**
   * @inheritDoc
   */
  public async unlock(): Promise<void> {
    if (this._Current_access_type() !== AccessType.WRITE)
      throw new InvalidArgument(
        `Error on std.${this.source_.constructor.name}.unlock(): this mutex is free on the unique lock.`,
      );

    --this.writing_;
    this.queue_.pop_front();

    this._Release();
  }

  /* ---------------------------------------------------------
        READ LOCK
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public lock_shared(): Promise<void> {
    return new Promise<void>((resolve) => {
      const resolver: IResolver = {
        handler: this.writing_ === 0 ? null : resolve,
        accessType: AccessType.READ,
        lockType: LockType.HOLD,
      };
      this.queue_.push_back(resolver);

      ++this.reading_;
      if (resolver.handler === null) resolve();
    });
  }

  /**
   * @inheritDoc
   */
  public async try_lock_shared(): Promise<boolean> {
    if (this.writing_ !== 0) return false;

    ++this.reading_;
    this.queue_.push_back({
      handler: null,
      accessType: AccessType.READ,
      lockType: LockType.KNOCK,
    });
    return true;
  }

  /**
   * @inheritDoc
   */
  public try_lock_shared_for(ms: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      // CONSTRUCT RESOLVER
      const it: List.Iterator<IResolver> = this.queue_.insert(
        this.queue_.end(),
        {
          handler: this.writing_ === 0 ? null : resolve,
          accessType: AccessType.READ,
          lockType: LockType.KNOCK,
        },
      );

      ++this.reading_;
      if (it.value.handler === null) resolve(true);
      else {
        // AUTOMATIC UNLOCK AFTER TIMEOUT
        sleep_for(ms).then(() => {
          // NOT YET, THEN DO UNLOCK
          if (it.value.handler !== null) {
            --this.reading_;
            this._Cancel(it);
          }
        });
      }
    });
  }

  /**
   * @inheritDoc
   */
  public async try_lock_shared_until(at: Date): Promise<boolean> {
    // COMPUTE MILLISECONDS TO WAIT
    const now: Date = new Date();
    const ms: number = at.getTime() - now.getTime();

    return await this.try_lock_shared_for(ms);
  }

  /**
   * @inheritDoc
   */
  public async unlock_shared(): Promise<void> {
    if (this._Current_access_type() !== AccessType.READ)
      throw new InvalidArgument(
        `Error on std.${this.source_.constructor.name}.unlock_shared(): this mutex is free on the shared lock.`,
      );

    --this.reading_;
    this.queue_.pop_front();

    this._Release();
  }

  /* ---------------------------------------------------------
        RELEASE
    --------------------------------------------------------- */
  private _Release(): void {
    // STEP TO THE NEXT LOCKS
    const current: AccessType = this._Current_access_type()!;
    const resolverList: IResolver[] = [];

    for (const resolver of this.queue_) {
      // DIFFERENT ACCESS TYPE COMES?
      if (resolver.accessType !== current) break;
      // COPY AND CLEAR
      else if (resolver.handler !== null) {
        resolverList.push({ ...resolver });
        resolver.handler = null;
      }

      // STOP AFTER WRITE LOCK
      if (resolver.accessType === AccessType.WRITE) break;
    }

    // CALL THE HANDLERS
    for (const resolver of resolverList)
      if (resolver.lockType === LockType.HOLD) resolver.handler!();
      else resolver.handler!(true);
  }

  private _Cancel(it: List.Iterator<IResolver>): void {
    //----
    // POP THE RELEASE
    //----
    // DO RASE
    this.queue_.erase(it);

    // EXTRACT HANDLER TO AVOID THE `this._Release()`
    const handler: Function = it.value.handler!;
    it.value.handler = null;

    //----
    // POST-PROCESS
    //----
    // CHECK THE PREVIOUS RESOLVER
    const prev: List.Iterator<IResolver> = it.prev();

    // RELEASE IF IT IS THE LASTEST RESOLVER
    if (prev.equals(this.queue_.end()) === false && prev.value.handler === null)
      this._Release();

    // (LAZY) RETURNS FAILURE
    handler(false);
  }
}

interface IResolver {
  handler: Function | null;
  accessType: AccessType; // read or write
  lockType: LockType; // void or boolean
}
