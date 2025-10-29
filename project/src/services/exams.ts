import { storage } from './storage';
import { upcomingExams as seedExams } from '../data/mockData';
import type { Exam } from '../types';

const EXAMS_KEY = 'app.exams.v1';
const REGISTERED_KEY = 'app.exams.registered.v1';

const ensureExams = (): Exam[] => storage.getOrSet<Exam[]>(EXAMS_KEY, seedExams);

export const getExams = (): Exam[] => ensureExams();
export const getRegisteredExamIds = (): string[] => storage.getOrSet<string[]>(REGISTERED_KEY, []);

export const toggleRegisterExam = (id: string): string[] => {
  return storage.update<string[]>(REGISTERED_KEY, (cur) => {
    const list = cur ?? [];
    return list.includes(id) ? list.filter((x) => x !== id) : [id, ...list];
  });
};
