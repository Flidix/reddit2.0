import { DatabaseEntitiesType } from '../types';

export const databaseTables: Record<keyof DatabaseEntitiesType, string> = <const>{
  users: 'users',
  treds: 'treds',
  comments: 'comments',
  likes: 'likes',
  commentIns: 'commentIns',
};
