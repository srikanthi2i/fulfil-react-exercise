  
import * as ENDPOINTS from '../globals/constants/api';
import { client } from '../globals/core/interceptor';

export default class HomeService {
  public static getDataList = (pageNo: number, limit: number = 50) =>
    client.get(`${ENDPOINTS.GET_DATA_ENDPOINT}?_page=${pageNo}&_limit=${limit}`);
  public static searchDataList = (searchText: string, filter: string, pageNo: number) =>
    client.get(`${ENDPOINTS.GET_DATA_ENDPOINT}?${filter ?
                `${filter}_like=${searchText}&_page=${pageNo}&_limit=50` :
                  `q=${searchText}&_page=${pageNo}&_limit=50`}`);
}
