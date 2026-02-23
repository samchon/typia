import type { Tagged, UnwrapTagged } from 'type-fest';
import type { UnpluginBuildContext, UnpluginContext } from 'unplugin';

export type UnContext = UnpluginBuildContext & UnpluginContext;

export type CacheKey = Tagged<string, 'cache-key'>;
export type CachePath = Tagged<string, 'cache-path'>;
export type ID = Tagged<string, 'id'>;
export type Source = Tagged<string, 'source'>;
export type FilePath = Tagged<string, 'file-path'>;
export type Data = Tagged<string, 'data'>;

export function wrap<T extends Tagged<PropertyKey, any>>(value: UnwrapTagged<T>): T {
	return value as T;
}

export function unwrap<T extends Tagged<PropertyKey, any>>(value: T): UnwrapTagged<T> {
	return value as UnwrapTagged<T>;
}
