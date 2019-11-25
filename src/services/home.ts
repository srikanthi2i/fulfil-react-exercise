  
import * as ENDPOINTS from '../globals/constants/api';
import { client } from '../globals/core/interceptor';

export default class HomeService {
  public static getData = () => client.get(ENDPOINTS.GET_DATA_ENDPOINT);
}