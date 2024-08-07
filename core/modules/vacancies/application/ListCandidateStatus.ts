import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';

import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

// @ts-ignore
@injectable()
export default class ListCandidateStatus {
  constructor(
    // @ts-ignore
    @inject(TYPES.CandidateStatusRepository)
    private candidateStatusRepository: CandidateStatusRepository
  ) {}

  async execute(vacancyId: string): Promise<{ data: CandidateStatus[] }> {
    return this.candidateStatusRepository.findAll(vacancyId);
  }
}
