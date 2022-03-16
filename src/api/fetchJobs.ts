import axios from './axios';
import { AxiosPromise } from 'axios';
import Job from '../types/Job';

export const fetchJobs = (): AxiosPromise<Job[]> => {
  return axios.get('/')
}