import type { tags } from 'typia';

export type IMember = {
	email: string & tags.Format<'email'>;
	id: string & tags.Format<'uuid'>;
	age: number & tags.Type<'uint32'> & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
};
