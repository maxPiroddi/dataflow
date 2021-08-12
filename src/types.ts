import { nodeKinds } from 'scenes/Editor/service/state';
import { GetSchema } from './scenes/Editor/service/types';

export * from './scenes/Editor/service/types';
export * from './scenes/Editor/service/actions/types';

export type KindSchema = GetSchema<typeof nodeKinds>;
