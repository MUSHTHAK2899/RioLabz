import { axios, constants,} from "../Utils/Config";


class GeneralApiFetch{
    getProductList() {
        const reponse = axios
          .get(`${constants.baseURL}products`)
          .then((data) => {
            return data;
          })
          .catch((error) => {
            return {};
          });
        return reponse;
      }
    getCatagoryList() {
        const reponse = axios
          .get(`${constants.baseURL}products/categories`)
          .then((data) => {
            return data;
          })
          .catch((error) => {
            return {};
          });
        return reponse;
      }
}

export default new GeneralApiFetch();