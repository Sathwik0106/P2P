import { storage } from './storage';
import { jobs as seedJobs } from '../data/mockData';
import type { Job } from '../types';

const JOBS_KEY = 'app.jobs.v1';
const SAVED_KEY = 'app.jobs.saved.v1';
const APPLIED_KEY = 'app.jobs.applied.v1';

const ensureJobs = (): Job[] => storage.getOrSet<Job[]>(JOBS_KEY, seedJobs);

export const getJobs = (): Job[] => ensureJobs();

export const getSavedJobIds = (): string[] => storage.getOrSet<string[]>(SAVED_KEY, []);
export const getAppliedJobIds = (): string[] => storage.getOrSet<string[]>(APPLIED_KEY, []);

export const toggleSaveJob = (id: string): string[] => {
  return storage.update<string[]>(SAVED_KEY, (cur) => {
    const list = cur ?? [];
    return list.includes(id) ? list.filter((x) => x !== id) : [id, ...list];
  });
};

export const applyToJob = (id: string): string[] => {
  return storage.update<string[]>(APPLIED_KEY, (cur) => {
    const list = cur ?? [];
    if (list.includes(id)) return list; // idempotent
    return [id, ...list];
  });
};
