import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';
import type CandidateStatusRepository from '@core/modules/vacancies/domain/CandidateStatusRepository';
import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';
import type HttpConnector from '@core/modules/vacancies/infrastructure/http/HttpConnector';

// @ts-ignore
@injectable()
class HttpCandidateStatusRepository implements CandidateStatusRepository {
  constructor(
    // @ts-ignore
    @inject(TYPES.HttpConnector)
    private httpConnector: HttpConnector
  ) {}

  findAll(vacancyId: string): Promise<{ data: CandidateStatus[] }> {
    return this.httpConnector.get<{ data: CandidateStatus[] }>(`/candidate-status/${vacancyId}`);
  }
}

export default HttpCandidateStatusRepository;