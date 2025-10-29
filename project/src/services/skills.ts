import { storage, genId } from './storage';
import { skillSwapRequests as seed } from '../data/mockData';
import type { SkillSwapRequest, User } from '../types';

const KEY = 'app.skills.swaps.v1';

const ensure = (): SkillSwapRequest[] => storage.getOrSet<SkillSwapRequest[]>(KEY, seed);

export const getSkillSwaps = (): SkillSwapRequest[] => ensure();

export const createSkillSwap = (
  user: User,
  skillToLearn: string,
  skillToTeach: string,
  description: string,
  availability: string
): SkillSwapRequest => {
  const req: SkillSwapRequest = {
    id: genId(),
    user,
    skillToLearn,
    skillToTeach,
    description,
    availability,
    createdAt: new Date().toISOString(),
    status: 'open',
  };
  storage.update<SkillSwapRequest[]>(KEY, (cur) => [req, ...(cur ?? ensure())]);
  return req;
};
