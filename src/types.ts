import { nodeKinds } from 'service/state';
import { GetSchema } from './service/types';

export * from './service/types';
export * from './service/actions/types';

export type KindSchema = GetSchema<typeof nodeKinds>;
